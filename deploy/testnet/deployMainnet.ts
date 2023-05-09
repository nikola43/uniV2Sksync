import { HardhatRuntimeEnvironment } from "hardhat/types";
import { deployContract, initializeZkSyncWalletAndDeployer } from "../../deploy-utils/helper";
import { ZERO_ADDRESS } from "../../test/shared/utilities";

import { ExecException } from 'child_process';
import fs from "fs";
import * as hre from "hardhat";
import { artifacts, network } from "hardhat";

function execShellCommand(cmd: string) {
    const exec = require('child_process').exec
    return new Promise((resolve) => {
        exec(cmd, (error: ExecException, stdout: string, stderr: string) => {
            if (error) {
                console.warn(error)
            }
            resolve(stdout ? stdout : stderr)
        })
    })
}

export const sleep = async (seconds: number) => {
    console.log(`Sleeping for ${seconds} seconds`)
    await execShellCommand("sleep " + seconds);
    console.log("END")
}

export const updateABI = async (contractName: string) => {
    const abiDir = `${__dirname}/../abi`;
    if (!fs.existsSync(abiDir)) {
        fs.mkdirSync(abiDir);
    }
    const Artifact = artifacts.readArtifactSync(contractName);
    fs.writeFileSync(
        `${abiDir}/${contractName}.json`,
        JSON.stringify(Artifact.abi, null, 2)
    )
}

const verify = async (contractAddress: string, contractName: string, args: any[] = []) => {
    // @ts-ignore
    if (network == 'localhost' || network == 'hardhat') return
    try {
        await updateABI(contractName)
        await hre.run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        });
    } catch (ex) {
        console.log(ex);

    }
}

const SLEEP_TIME = 15;

export default async function (hre: HardhatRuntimeEnvironment) {
    let deployments: any[] = []

    initializeZkSyncWalletAndDeployer(hre);

    const wETHAddress: string = '0x20b28B1e4665FFf290650586ad76E977EAb90c5D'; // zkSync Mainnet WETH

    // 1. Vault
    const vault = await deployContract('vault', 'SyncSwapVault',
        [wETHAddress],
    );
    console.log("Vault address: ", vault.address);
    await sleep(SLEEP_TIME);
    await verify(vault.address, "SyncSwapVault", [wETHAddress]);
    deployments.push({
        name: 'SyncSwapVault',
        address: vault.address,
    });

    // 2. Forwarder Registry
    const forwarderRegistry = await deployContract('forwarderRegistry', 'ForwarderRegistry');
    console.log("ForwarderRegistry address: ", forwarderRegistry.address);
    await sleep(SLEEP_TIME);
    await verify(vault.address, "ForwarderRegistry");
    deployments.push({
        name: 'ForwarderRegistry',
        address: forwarderRegistry.address,
    });

    // 3. Pool Master
    const master = await deployContract('master', 'SyncSwapPoolMaster',
        [vault.address, forwarderRegistry.address, ZERO_ADDRESS],
    );
    console.log("PoolMaster address: ", master.address);
    await sleep(SLEEP_TIME);
    await verify(master.address, "SyncSwapPoolMaster", [vault.address, forwarderRegistry.address, ZERO_ADDRESS]);
    deployments.push({
        name: 'SyncSwapPoolMaster',
        address: master.address,
    });

    // 4. Fee Registry
    const feeRegistry = await deployContract('feeRegistry', 'FeeRegistry',
        [master.address]
    );
    console.log("FeeRegistry address: ", feeRegistry.address);
    await sleep(SLEEP_TIME);
    await verify(feeRegistry.address, "FeeRegistry", [master.address]);
    deployments.push({
        name: 'FeeRegistry',
        address: feeRegistry.address,
    });

    console.log('Adding vault as fee sender...');
    await feeRegistry.setSenderWhitelisted(vault.address, true);
    console.log('Added vault as fee sender.');

    // 5. Fee Recipient
    const feeRecipient = await deployContract('feeRecipient', 'SyncSwapFeeRecipient',
        [feeRegistry.address]
    );
    console.log("FeeRecipient address: ", feeRecipient.address);
    await sleep(SLEEP_TIME);
    await verify(feeRecipient.address, "SyncSwapFeeRecipient", [feeRegistry.address]);
    deployments.push({
        name: 'SyncSwapFeeRecipient',
        address: feeRecipient.address,
    });

    // 6. Fee Manager
    const feeManager = await deployContract('feeManager', 'SyncSwapFeeManager',
        [feeRecipient.address]
    );
    console.log("FeeManager address: ", feeManager.address);
    await sleep(SLEEP_TIME);
    await verify(feeManager.address, "SyncSwapFeeManager", [feeRecipient.address]);
    deployments.push({
        name: 'SyncSwapFeeManager',
        address: feeManager.address,
    });

    console.log('Initializing fee manager to master...');
    await master.setFeeManager(feeManager.address);
    console.log('Initialized fee manager to master.');

    // 7. Classic Pool Factory
    const classicFactory = await deployContract('classicPoolFactory', 'SyncSwapClassicPoolFactory',
        [master.address],
    );
    console.log("ClassicPoolFactory address: ", classicFactory.address);
    await sleep(SLEEP_TIME);
    await verify(classicFactory.address, "SyncSwapClassicPoolFactory", [master.address]);
    deployments.push({
        name: 'SyncSwapClassicPoolFactory',
        address: classicFactory.address,
    });

    console.log('Whitelisting classic factory...');
    await master.setFactoryWhitelisted(classicFactory.address, true);
    console.log('Whitelisted classic factory.');

    // 8. Stable Pool Factory
    const stableFactory = await deployContract('stablePoolFactory', 'SyncSwapStablePoolFactory',
        [master.address],
    );
    console.log("StablePoolFactory address: ", stableFactory.address);
    await sleep(SLEEP_TIME);
    await verify(stableFactory.address, "SyncSwapStablePoolFactory", [master.address]);
    deployments.push({
        name: 'SyncSwapStablePoolFactory',
        address: stableFactory.address,
    });

    console.log('Whitelisting stable factory...');
    await master.setFactoryWhitelisted(stableFactory.address, true);
    console.log('Whitelisted stable factory.');

    // 9. Router
    const router = await deployContract('router', 'SyncSwapRouter',
        [vault.address, wETHAddress],
    );
    console.log("Router address: ", router.address);
    await sleep(SLEEP_TIME);
    await verify(router.address, "SyncSwapRouter", [vault.address, wETHAddress]);
    deployments.push({
        name: 'SyncSwapRouter',
        address: router.address,
    });

    console.log('Adding router as forwarder...');
    await forwarderRegistry.addForwarder(router.address);
    console.log('Added router as forwarder.');

    // save deployments
    fs.writeFileSync(
        `${__dirname}/../deployments/${network.name}.json`,
        JSON.stringify(deployments, null, 2)
    )
}