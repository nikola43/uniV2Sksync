import chai, { expect } from 'chai'
import * as zksync from "zksync-web3";
import * as ethers from "ethers";
import * as hre from "hardhat";
import { solidity } from 'ethereum-waffle'
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";
import { formatEther, parseEther } from "ethers/lib/utils";
import { Constants } from './utils/constants';
chai.use(solidity)

const RICH_WALLET_PK = "0x7726827caac94a7f9e1b160f7ea819f172f7b6f9d2a97f992c38edeab82d4110";
let syncSwapFactory: zksync.Contract;
let syncSwapRouter: zksync.Contract;
let syncPSM: zksync.Contract;
let token0: zksync.Contract;
let token1: zksync.Contract;

async function deployFactory(deployer: Deployer, _feeToSetter: string): Promise<zksync.Contract> {
  const artifact = await deployer.loadArtifact("SyncSwapFactory");
  return await deployer.deploy(artifact, [_feeToSetter]);
}

async function deployRouter(deployer: Deployer, _factory: string, _WETH: string, _PSM: string): Promise<zksync.Contract> {
  const artifact = await deployer.loadArtifact("SyncSwapRouter");
  return await deployer.deploy(artifact, [_factory, _WETH, _PSM]);
}

async function deploySyncPSM(deployer: Deployer): Promise<zksync.Contract> {
  const artifact = await deployer.loadArtifact("SyncPSM");
  return await deployer.deploy(artifact);
}

async function deployToken(deployer: Deployer, _name: string, _symbol: string, _precision: number, _supply: ethers.ethers.BigNumber, _to: string): Promise<zksync.Contract> {
  const artifact = await deployer.loadArtifact("Token");
  return await deployer.deploy(artifact, [_name, _symbol, _precision, _supply, _to]);
}

async function sleep(ms: number) {
  console.log("sleeping for " + ms + " ms");
  return new Promise(resolve =>
    setTimeout(resolve, ms)
  );
}

describe("Deploy Factory", function () {

  const provider = zksync.Provider.getDefaultProvider();
  const wallet = new zksync.Wallet(RICH_WALLET_PK, provider);
  const deployer = new Deployer(hre, wallet);

  it("Should deploy SyncSwapFactory", async function () {
    const _feeToSetter = wallet.address;
    syncSwapFactory = await deployFactory(deployer, _feeToSetter);
    expect(await syncSwapFactory.feeTo()).to.eq(Constants.ZERO_ADDRESS);
    expect(await syncSwapFactory.feeToSetter()).to.eq(wallet.address);
    expect(await syncSwapFactory.allPairsLength()).to.eq(0);
  });

 

  it("Should deploy SyncPSM", async function () {
    syncPSM = await deploySyncPSM(deployer);
  });

  it("Should deploy SyncSwapRouter", async function () {
    const _WETH = "0x20b28B1e4665FFf290650586ad76E977EAb90c5D";
    syncSwapRouter = await deployRouter(deployer, syncSwapFactory.address, _WETH, syncPSM.address);
  });

  it("Should deploy token0 and token1", async function () {
    token0 = await deployToken(deployer, "token0", "token0", 18, parseEther("100000000"), wallet.address);
    token1 = await deployToken(deployer, "token1", "token1", 18, parseEther("100000000"), wallet.address);
    expect(await token0.name()).to.eq("token0");
    expect(await token1.name()).to.eq("token1");
    expect(await token0.symbol()).to.eq("token0");
    expect(await token1.symbol()).to.eq("token1");
    expect(await token0.decimals()).to.eq(18);
    expect(await token1.decimals()).to.eq(18);
  });

  it("Should approve token0 and token1", async function () {
    const tx1 = await token0.approve(syncSwapRouter.address, ethers.constants.MaxUint256);
    await tx1.wait();

    const tx2 = await token1.approve(syncSwapRouter.address, ethers.constants.MaxUint256);
    await tx2.wait();
  });

  it("Should add liquidity token0 token1", async function () {
    const amount0Desired = parseEther("1000");
    const amount1Desired = parseEther("1000");
    const amountAMin = parseEther("0");
    const amountBMin = parseEther("0");
    const deadline = Math.floor(Date.now() / 1000) + 60 * 20; // 20 minutes from now

    const tx = await syncSwapRouter.addLiquidity(
      token0.address,
      token1.address,
      amount0Desired,
      amount1Desired,
      amountAMin,
      amountBMin,
      wallet.address,
      deadline);

    await tx.wait();
  });

  it("Should swap 100 token0 for token1", async function () {
    // get balance
    let balance0 = await token0.balanceOf(wallet.address);
    let balance1 = await token1.balanceOf(wallet.address);
    console.log("balance0 before: " + ethers.utils.formatEther(balance0));
    console.log("balance1 before: " + ethers.utils.formatEther(balance1));

    const amountIn = parseEther("10");
    const amountOutMin = parseEther("0");
    const deadline = Math.floor(Date.now() / 1000) + 60 * 20; // 20 minutes from now

    const tx = await syncSwapRouter.swapExactTokensForTokens(
      amountIn,
      amountOutMin,
      [token0.address, token1.address],
      wallet.address,
      deadline);

    await tx.wait();

    // get balance
    balance0 = await token0.balanceOf(wallet.address);
    balance1 = await token1.balanceOf(wallet.address);
    console.log("balance0: " + ethers.utils.formatEther(balance0));
    console.log("balance1: " + ethers.utils.formatEther(balance1));

  });

  it("Should add liquidity token0 and eth", async function () {
    const tx = await syncSwapRouter.addLiquidityETH(
      token0.address,    // token
      parseEther("100"), // amountTokenDesired 
      parseEther("0"),   // amountTokenMin
      parseEther("0"),   // amountETHMin
      wallet.address,    // to
      Math.floor(Date.now() / 1000) + 60 * 20, // deadline - 20 minutes from now,
      {
        value: parseEther("1") // eth amount
      });

    await tx.wait();
  });

  it("Should add liquidity token1 and eth", async function () {
    const tx = await syncSwapRouter.addLiquidityETH(
      token1.address,    // token
      parseEther("100"), // amountTokenDesired 
      parseEther("0"),   // amountTokenMin
      parseEther("0"),   // amountETHMin
      wallet.address,    // to
      Math.floor(Date.now() / 1000) + 60 * 20); // deadline - 20 minutes from now,
    await tx.wait();
  });




  /*
  it("Should get pair balance", async function () {
    const pairAddress = await syncSwapFactory.getPair(token0.address, token1.address);
    console.log("pairAddress: " + pairAddress);
    const pair = await deployer.loadArtifact("syncSwapPair");
    const pairContract = new zksync.Contract(pairAddress, pair.abi);
    console.log(pairContract);
    const balance = await pairContract.balanceOf("0x20f72Dcf9141e1b6014C835B6d0709E32d806F10");
    //console.log("balance: ", balance);
  });
  */


});
