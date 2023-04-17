import { utils, Wallet } from "zksync-web3";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";

// An example of a deploy script that will deploy and call a simple contract.
export default async function (hre: HardhatRuntimeEnvironment) {
  console.log(`Running deploy script for the SkSyncSwapToken contract`);

  // Initialize the wallet.
  const wallet = new Wallet("1226bb35adb01d8f92d506362fd386dde13d70fa2e8a70c6783f74ce8f6c621b");

  // Create deployer object and load the artifact of the contract we want to deploy.
  const deployer = new Deployer(hre, wallet);
  const factory = "0x84db2E9badB3ca55174b83432BA4B7CD349b9227";
  const WETH = "0x294cB514815CAEd9557e6bAA2947d6Cf0733f014";
  const PSM = "0xaa86cE33CD60C468Ef6Ed461367961425b6aB18f";
  const artifact = await deployer.loadArtifact("SyncSwapRouter");
  const SyncSwapRouterContract = await deployer.deploy(artifact, [factory, WETH, PSM]);

  // Show the contract info.
  const contractAddress = SyncSwapRouterContract.address;
  console.log(`${artifact.contractName} was deployed to ${contractAddress}`);
}
