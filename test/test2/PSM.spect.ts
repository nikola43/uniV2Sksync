import chai, { expect } from 'chai'
import * as zksync from "zksync-web3";
import * as hre from "hardhat";
import { solidity } from 'ethereum-waffle'
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";
import { Constants } from '../utils/constants'
import { Fixtures } from '../utils/fixtures'
import { deployContract, deployERC20, expandTo18Decimals, expandToDecimals, getAccount } from '../utils/helper'


const RICH_WALLET_PK = "0x7726827caac94a7f9e1b160f7ea819f172f7b6f9d2a97f992c38edeab82d4110";
chai.use(solidity)



describe('SyncPSM', () => {

  // Fixtures are shared among tasks in this test.
  before(async () => {
    // Deploy PSM
    Fixtures.set('PSM', await deployContract('SyncPSM'));

    // Create stables
    const initialSupply = 1_000_000;
    Fixtures.set('USDC', await deployERC20('USD Coin', 'USDC', 6, expandToDecimals(initialSupply, 6))); // 6 decimals for USDC
    Fixtures.set('BUSD', await deployERC20('Binance USD', 'BUSD', 18, expandTo18Decimals(initialSupply)));
    Fixtures.set('DAI', await deployERC20('Dai', 'DAI', 18, expandTo18Decimals(initialSupply)));
    Fixtures.set('UST', await deployERC20('TerraUSD', 'UST', 18, expandTo18Decimals(initialSupply))); // shh
  });

  it('Should add assets to PSM', async () => {
    const provider = zksync.Provider.getDefaultProvider();
    const wallet = new zksync.Wallet(RICH_WALLET_PK, provider);
    const deployer = new Deployer(hre, wallet);

    const PSM = Fixtures.use('PSM');
    const USDC = Fixtures.use('USDC');
    const BUSD = Fixtures.use('BUSD');
    const DAI = Fixtures.use('DAI');
    const UST = Fixtures.use('UST');

    await expect(PSM.addAsset(Constants.ZERO_ADDRESS)).to.be.revertedWith('Invalid asset');
    await expect(PSM.addAsset((await getAccount(1)).address)).to.be.reverted; // Without reason

    await PSM.addAsset(USDC.address);
    await PSM.addAsset(BUSD.address);
    await PSM.addAsset(DAI.address);
    await PSM.addAsset(UST.address);

    await expect(await PSM.listedAssetsLength()).to.be.eq(4);
    await expect(await PSM.getListedAssets()).to.be.eql([USDC.address, BUSD.address, DAI.address, UST.address]);
  });
});



