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
  const artifact = await deployer.loadArtifact("SyncPSM");
  const SyncPSMConstract = await deployer.deploy(artifact);

  // Show the contract info.
  const contractAddress = SyncPSMConstract.address;
  console.log(`${artifact.contractName} was deployed to ${contractAddress}`);
}
