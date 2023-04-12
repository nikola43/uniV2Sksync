import { expect } from "chai";
import * as zksync from "zksync-web3";
import * as ethers from "ethers";
import * as hre from "hardhat";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";
import { parseEther } from "ethers/lib/utils";

const RICH_WALLET_PK = "0x7726827caac94a7f9e1b160f7ea819f172f7b6f9d2a97f992c38edeab82d4110";
let UniswapV2Factory: zksync.Contract;
let UniswapV2Router02: zksync.Contract;
let token0: zksync.Contract;
let token1: zksync.Contract;

async function deployFactory(deployer: Deployer, _feeToSetter: string): Promise<zksync.Contract> {
  const artifact = await deployer.loadArtifact("UniswapV2Factory");
  return await deployer.deploy(artifact, [_feeToSetter]);
}

async function deployRouter(deployer: Deployer, _factory: string, _WETH: string): Promise<zksync.Contract> {
  const artifact = await deployer.loadArtifact("UniswapV2Router02");
  return await deployer.deploy(artifact, [_factory, _WETH]);
}

async function deployToken(deployer: Deployer, _name: string, _symbol: string, _precision: string, _supply: ethers.ethers.BigNumber, _to: string): Promise<zksync.Contract> {
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

  it("Should deploy UniswapV2Factory and return INIT_CODE_PAIR_HASH", async function () {
    const _feeToSetter = wallet.address;
    UniswapV2Factory = await deployFactory(deployer, _feeToSetter);

    const INIT_CODE_PAIR_HASH = await UniswapV2Factory.INIT_CODE_PAIR_HASH();
    expect(INIT_CODE_PAIR_HASH.length).to.eq(66);
    console.log("INIT_CODE_PAIR_HASH: " + INIT_CODE_PAIR_HASH);
    console.log(INIT_CODE_PAIR_HASH.substring(2));
    
    await sleep(10000);
  });

  it("Should deploy UniswapV2Router02", async function () {

    const _WETH = "0x294cB514815CAEd9557e6bAA2947d6Cf0733f014";
    UniswapV2Router02 = await deployRouter(deployer, UniswapV2Factory.address, _WETH);

    const factoryAddress = await UniswapV2Router02.factory();
    expect(factoryAddress).to.eq(UniswapV2Factory.address);

    const WETH = await UniswapV2Router02.WETH();
    expect(WETH).to.eq(_WETH);
  });

  it("Should deploy token0 and token1", async function () {
    token0 = await deployToken(deployer, "token0", "token0", "18", parseEther("100000000"), wallet.address);
    token1 = await deployToken(deployer, "token1", "token1", "18", parseEther("100000000"), wallet.address);


    expect(await token0.name()).to.eq("token0");
    expect(await token1.name()).to.eq("token1");
    expect(await token0.symbol()).to.eq("token0");
    expect(await token1.symbol()).to.eq("token1");
    expect(await token0.decimals()).to.eq(18);
    expect(await token1.decimals()).to.eq(18);

  });

  it("Should create pair", async function () {
    const tx = await UniswapV2Factory.createPair(token0.address, token1.address);
    await tx.wait();

  });

  it("Should get pair", async function () {
    const pairAddress = await UniswapV2Factory.getPair(token0.address, token1.address);
    console.log("pairAddress: " + pairAddress);
  });

  it("Should add liquidity", async function () {
    const amount0Desired = parseEther("1000000");
    const amount1Desired = parseEther("1000000");
    const amountAMin = parseEther("100000");
    const amountBMin = parseEther("100000");
    const deadline = 2648069985 // Saturday, 29 November 2053 22:59:45

    const tx = await UniswapV2Router02.addLiquidity(
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

  it("Should get pair balance", async function () {
    const pairAddress = await UniswapV2Factory.getPair(token0.address, token1.address);
    const pair = await deployer.loadArtifact("UniswapV2Pair");
    const pairContract = new ethers.Contract(pairAddress, pair.abi);
    const balance = await pairContract.balanceOf(wallet.address);
    console.log("balance: " + ethers.utils.formatEther(balance));
  });
});
