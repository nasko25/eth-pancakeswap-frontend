// const MasterChef = artifacts.require("MasterChef");
// const Multicall = artifacts.require("Multicall");
// const RBRYToken = artifacts.require("RBRYToken");
// const SousChef = artifacts.require("SousChef");
// const SyrupBar = artifacts.require("SyrupBar");
// const Profile = artifacts.require("RaspberryProfile");
const LinkToken = artifacts.require("LinkToken");
module.exports = function(deployer) {
    // deployer.deploy(Multicall);
    // deployer.deploy(RBRYToken).then(async () => {
    //   await deployer.deploy(SyrupBar, RBRYToken.address).then(async () => {
    //                                            // reward per block; value taken from the bsc souschef deployed contract    // start block  // end block
    //     await deployer.deploy(SousChef, SyrupBar.address, "0x0000000000000000000000000000000000000000000000001bc16d674ec80000", 10900005, (10900005 + 150000));
    //                                                                                                                // RBRY per block; value taken from the bsc masterchef deployed contract    // start block
    //     await deployer.deploy(MasterChef, RBRYToken.address, SyrupBar.address, "0x145abf73a136dc3ad9baa9f123553dfcfd716d74", "0x0000000000000000000000000000000000000000000000022b1c8c1227a00000", 10600005);
    //   });

    // });
    // Additional contracts can be deployed here

                                            // rbry address
    // deployer.deploy(Profile, "0xC4F1d37E1C07D77404cd50f36bb25492F8f38019", "2000000000000000000", "1000000000000000000", "2000000000000000000");

    // TODO deploy random number generator, then lottery, then call RNG.setLotteryAddress() to set the lottery's address

    // link token/contract: https://etherscan.io/address/0x514910771af9ca656af840dff83e8264ecf986ca#code (will need to deploy it on ropsten)
    // deployed link token address: 0xEFB6eD65c056299d64614c5687Cb75DE2709c2b5
    // deployer.deploy(LinkToken);

    // TODO deploy BlockHashStore, to be able to deploy VRFCoordinator, which is needed for the RNG, needed for the lottery
};

/**
var One = artifacts.require("./One.sol");
var Two = artifacts.require("./Two.sol");

module.exports = (deployer, network) => {
  deployer.deploy(One).then(function() {
    return deployer.deploy(Two, One.address)
  });
};
 */
