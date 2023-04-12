import { utils, Wallet } from "zksync-web3";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";
import { parseEther } from "ethers/lib/utils";

// An example of a deploy script that will deploy and call a simple contract.
export default async function (hre: HardhatRuntimeEnvironment) {
  console.log(`Running deploy script for the SkSyncSwapFarms contract`);

  // Initialize the wallet.
  const wallet = new Wallet("0xb3566ee61001b4e37eed7adc6ed9c7315cd95bc96357ddccf4ffbc211c9318b0");

  // Create deployer object and load the artifact of the contract we want to deploy.
  const deployer = new Deployer(hre, wallet);
  const _skSyncSwapToken = "0x89fF9c4D2489B9885bb1e0840b84448a174f9464"
  const artifact = await deployer.loadArtifact("SkSyncSwapFarms");
  const SkSyncSwapFactoryContract = await deployer.deploy(artifact, [_skSyncSwapToken, parseEther("40")]);

  // Show the contract info.
  const contractAddress = SkSyncSwapFactoryContract.address;
  console.log(`${artifact.contractName}: ${contractAddress}`);
}
