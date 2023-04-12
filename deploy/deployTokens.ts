import { Contract, utils, Wallet } from "zksync-web3";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";
import { parseEther } from "ethers/lib/utils";


async function deployToken(deployer: Deployer, _name: string, _symbol: string, _precision: number, _supply: ethers.ethers.BigNumber, _to: string): Promise<Contract> {
  const artifact = await deployer.loadArtifact("Token");
  return await deployer.deploy(artifact, [_name, _symbol, _precision, _supply, _to]);
}

// An example of a deploy script that will deploy and call a simple contract.
export default async function (hre: HardhatRuntimeEnvironment) {
  console.log(`Running deploy script for the SkSyncSwapToken contract`);

  // Initialize the wallet.
  const wallet = new Wallet("0xb3566ee61001b4e37eed7adc6ed9c7315cd95bc96357ddccf4ffbc211c9318b0");

  // Create deployer object and load the artifact of the contract we want to deploy.
  const deployer = new Deployer(hre, wallet);
  const artifact = await deployer.loadArtifact("Token");
  const token0 = await deployToken(deployer, "token0", "token0", 18, parseEther("100000000"), wallet.address);
  const token1 = await deployToken(deployer, "token1", "token1", 18, parseEther("100000000"), wallet.address);

  // Show the contract info.

  console.log(`${artifact.contractName} was deployed to ${token0.address}`);
  console.log(`${artifact.contractName} was deployed to ${token1.address}`);
}
