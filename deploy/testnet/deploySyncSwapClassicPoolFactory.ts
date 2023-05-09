import { HardhatRuntimeEnvironment } from "hardhat/types";
import { deployContract, initializeZkSyncWalletAndDeployer } from "../../deploy-utils/helper";


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
    initializeZkSyncWalletAndDeployer(hre);

    const master = "0x98986518Cac966488C567A8bfb0CFC3c6156335D";

    const stableFactory = await deployContract('classicPoolFactory', 'SyncSwapClassicPoolFactory',
        [master],
    );
    console.log("SyncSwapClassicPoolFactory address: ", stableFactory.address);
    //await sleep(SLEEP_TIME);
    //await verify(stableFactory.address, "SyncSwapClassicPoolFactory", [master]);


}