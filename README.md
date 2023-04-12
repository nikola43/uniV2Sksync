https://era.zksync.io/docs/api/hardhat/testing.html#testing-with-mocha-chai

1 Installing the testing environment
Download the dockerized project with the following command:
git clone https://github.com/matter-labs/local-setup.git

2 Start the local nodes
cd local-setup
./start.sh

3 - Compile contracts
npx hardhat compile

4 - Run tests
yarn test:factory

