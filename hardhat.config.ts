import { HardhatUserConfig } from "hardhat/config";

require("@matterlabs/hardhat-zksync-deploy");
require("@matterlabs/hardhat-zksync-solc");
import "@matterlabs/hardhat-zksync-verify";
import '@typechain/hardhat'

// dynamically changes endpoints for local tests
const zkSyncTestnet =
    process.env.NODE_ENV == "test"
        ? {
            url: "http://localhost:3050",
            ethNetwork: "http://localhost:8545",
            zksync: true,
        }
        : {
            url: "https://zksync2-testnet.zksync.dev",
            ethNetwork: "goerli",
            zksync: true,
            verifyURL: 'https://zksync2-testnet-explorer.zksync.dev/contract_verification'
        };

const config: HardhatUserConfig = {
    zksolc: {
        version: "1.3.7",
        compilerSource: "binary",
        settings: {},
    },
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            // @ts-ignore
            zksync: true,
        },
        zkSyncTestnet,
    },
    etherscan: {
        apiKey: "K8RG5EFT7F4C9K5J3ZH3XRW775SSG7Z1U5", // eth
    },
    solidity: {
        compilers: [
            {
                version: '0.8.19',
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200
                    }
                }
            },
            {
                version: '0.6.12', // Pan9inch Router
                settings: {
                    optimizer: {
                        enabled: true
                    }
                }
            },
            {
                version: '0.6.6', // Pangolin Router
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 1000
                    }
                }
            },
            {
                version: '0.8.2' // Pan9inch Pair
            },
            {
                version: '0.5.17' // WAVAX
            },
            {
                version: '0.5.16' // Pan9inch / Pangolin -> Pair / Factory
            },
            {
                version: '0.5.0' // Pan9inch Pair
            },
            {
                version: '0.4.24' // WBTC
            },
            {
                version: '0.4.18' // WBNB
            },
            {
                version: '0.8.0'
            }
        ]
    },
    paths: {
        sources: "./contracts",
        tests: "./test",
        cache: "./cache-zk",
        artifacts: "./artifacts-zk"
    },
    typechain: {
        outDir: 'typechain',
        target: 'ethers-v5'
    },
};

export default config;