const MasterChef = artifacts.require("MasterChef");
// const Multicall = artifacts.require("Multicall");
const RBRYToken = artifacts.require("RBRYToken");
const SousChef = artifacts.require("SousChef");
const SyrupBar = artifacts.require("SyrupBar");
module.exports = function(deployer) {
    // deployer.deploy(Multicall);
    deployer.deploy(RBRYToken).then(async () => {
      await deployer.deploy(SyrupBar, RBRYToken.address).then(async () => {
                                               // reward per block; value taken from the bsc souschef deployed contract    // start block  // end block
        await deployer.deploy(SousChef, SyrupBar.address, "0x0000000000000000000000000000000000000000000000001bc16d674ec80000", 10900005, (10900005 + 150000));
                                                                                                                   // RBRY per block; value taken from the bsc masterchef deployed contract    // start block
        await deployer.deploy(MasterChef, RBRYToken.address, SyrupBar.address, "0x145abf73a136dc3ad9baa9f123553dfcfd716d74", "0x0000000000000000000000000000000000000000000000022b1c8c1227a00000", 10600005);
      });

    });
    // Additional contracts can be deployed here
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
