import { utils, Wallet } from "zksync-web3";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";

// An example of a deploy script that will deploy and call a simple contract.
export default async function (hre: HardhatRuntimeEnvironment) {
  console.log(`Running deploy script for the SkSyncSwapToken contract`);

  // Initialize the wallet.
  const wallet = new Wallet("0xb3566ee61001b4e37eed7adc6ed9c7315cd95bc96357ddccf4ffbc211c9318b0");

  // Create deployer object and load the artifact of the contract we want to deploy.
  const deployer = new Deployer(hre, wallet);
  const factoryAddress = "0x0D4906b962F5602cf2D90AE8402e0C5A91AF6D3d"
  const WETH = "0x294cB514815CAEd9557e6bAA2947d6Cf0733f014"
  const artifact = await deployer.loadArtifact("SkSyncSwapRouter");
  const SkSyncSwapRouterContract = await deployer.deploy(artifact, [factoryAddress, WETH]);

  // Show the contract info.
  const contractAddress = SkSyncSwapRouterContract.address;
  console.log(`${artifact.contractName} was deployed to ${contractAddress}`);
}
