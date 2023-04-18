import { utils, Wallet } from "zksync-web3";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";
import { artifacts, network } from "hardhat";
import * as hre from "hardhat";
import fs from "fs";
import { parseEther } from "ethers/lib/utils";
import { ExecException } from 'child_process'


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

// An example of a deploy script that will deploy and call a simple contract.
export default async function (hre: HardhatRuntimeEnvironment) {
  console.log(`Running deploy script for the SkSyncSwapToken contract`);
  const SLEEP_TIME = 10;
  const isTesnet = false;

  // Initialize the wallet.
  const RICH_WALLET_PK = "0x7726827caac94a7f9e1b160f7ea819f172f7b6f9d2a97f992c38edeab82d4110";
  const deployer_PK = "0x1226bb35adb01d8f92d506362fd386dde13d70fa2e8a70c6783f74ce8f6c621b";
  const wallet = new Wallet(RICH_WALLET_PK);
  const deployer = new Deployer(hre, wallet);

  // deploy psm
  let artifact = await deployer.loadArtifact("SyncPSM");
  const SyncPSMConstract = await deployer.deploy(artifact);
  if (isTesnet) {
    await sleep(SLEEP_TIME);
    await verify(SyncPSMConstract.address, "SyncPSM");
  }

  console.log(`${artifact.contractName} was deployed to ${SyncPSMConstract.address}`);

  // deploy factory
  const _feeToSetter = deployer.zkWallet.address;
  artifact = await deployer.loadArtifact("SyncSwapFactory");
  const SyncSwapFactoryContract = await deployer.deploy(artifact, [_feeToSetter]);
  if (isTesnet) {
    await sleep(SLEEP_TIME);
    await verify(SyncSwapFactoryContract.address, "SyncPSM", [_feeToSetter]);
  }
  console.log(`${artifact.contractName} was deployed to ${SyncSwapFactoryContract.address}`);

  // deploy router
  const WETH = "0x20b28B1e4665FFf290650586ad76E977EAb90c5D";
  artifact = await deployer.loadArtifact("SyncSwapRouter");
  const SyncSwapRouterContract = await deployer.deploy(artifact, [SyncSwapFactoryContract.address, WETH, SyncPSMConstract.address]);
  if (isTesnet) {
    await sleep(SLEEP_TIME);
    await verify(SyncSwapRouterContract.address, "SyncPSM", [SyncSwapFactoryContract.address, WETH, SyncPSMConstract.address]);
  }
  console.log(`${artifact.contractName} was deployed to ${SyncSwapRouterContract.address}`);

  // deploy token
  artifact = await deployer.loadArtifact("Token");
  const token0 = await deployer.deploy(artifact, ["token0", "token0", 18, parseEther("100000000"), wallet.address]);
  if (isTesnet) {
    await sleep(SLEEP_TIME);
    await verify(token0.address, "Token", ["token0", "token0", 18, parseEther("100000000"), wallet.address]);
  }
  console.log(`${artifact.contractName} was deployed to ${token0.address}`);

  const token1 = await deployer.deploy(artifact, ["token1", "token1", 18, parseEther("100000000"), wallet.address]);
  if (isTesnet) {
    await sleep(SLEEP_TIME);
    await verify(token1.address, "Token", ["token1", "token1", 18, parseEther("100000000"), wallet.address]);
  }
  console.log(`${artifact.contractName} was deployed to ${token1.address}`);

  // add liquidity
  const tx1 = await token0.approve(SyncSwapRouterContract.address, ethers.constants.MaxUint256);
  if (isTesnet) {
    await sleep(SLEEP_TIME);
  }
  tx1.wait();

  const tx2 = await token1.approve(SyncSwapRouterContract.address, ethers.constants.MaxUint256);
  if (isTesnet) {
    await sleep(SLEEP_TIME);
  }
  tx2.wait();

  const amount0Desired = parseEther("1000");
  const amount1Desired = parseEther("1000");
  const amountAMin = parseEther("0");
  const amountBMin = parseEther("0");
  const deadline = Math.floor(Date.now() / 1000) + 60 * 20; // 20 minutes from now

  // token0 -> token1
  const tx3 = await SyncSwapRouterContract.addLiquidity(
    token0.address,
    token1.address,
    amount0Desired,
    amount1Desired,
    amountAMin,
    amountBMin,
    wallet.address,
    deadline);

  tx3.wait();

  /*
  const tx4 = await SyncSwapRouterContract.addLiquidityETH(
    token0.address,
    amount0Desired,
    amountAMin,
    amountBMin,
    wallet.address,
    deadline,
    { value: amount1Desired }
  )
  tx4.wait();
  */

  // deploy farms
  artifact = await deployer.loadArtifact("SyncSwapFarm");
  const SyncSwapFarmContract = await deployer.deploy(artifact, [token0.address, wallet.address]);
  if (isTesnet) {
    await sleep(SLEEP_TIME);
    await verify(SyncSwapFarmContract.address, "SyncSwapFarm", [token0.address, wallet.address]);
  }
  console.log(`${artifact.contractName} was deployed to ${SyncSwapFarmContract.address}`);

  const newStartTime = Math.floor(Date.now() / 1000) + 60 * 1; // 20 minutes from now
  const endTime = Math.floor(Date.now() / 1000) + 60 * 10000000; // 20 minutes from now
  SyncSwapFarmContract.setRewardParams(token0.address, parseEther("1"), newStartTime, endTime)


}
