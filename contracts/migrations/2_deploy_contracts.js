var MasterChef = artifacts.require("MasterChef");
module.exports = function(deployer) {
																		// RBRY per block; value taken from the bsc masterchef deployed contract    // start block
    deployer.deploy(MasterChef, "TODO: raspberry token contract address", "TODO: syrupbar token contract address", "TODO: contract deployer address", 0x0000000000000000000000000000000000000000000000022b1c8c1227a00000, 10900005);
    // Additional contracts can be deployed here
};