const RaspberryToken = artifacts.require("RaspberryERC20");
const RaspberryPair = artifacts.require("RaspberryPair");
const RaspberryFactory = artifacts.require("RaspberryFactory");
const RaspberryProfile = artifacts.require("RaspberryProfile");

module.exports = function (deployer) {
  deployer.deploy(RaspberryToken);
  deployer.deploy(RaspberryPair);

  // https://bscscan.com/address/0xbcfccbde45ce874adcb698cc183debcf17952812#code
  deployer.deploy(RaspberryFactory, "0x0000000000000000000000000f9399fc81dac77908a2dde54bb87ee2d17a3373");
  // https://bscscan.com/address/0xDf4dBf6536201370F95e06A0F8a7a70fE40E388a#code
  deployer.deploy(RaspberryProfile, "TODO raspberry token address", "0x0000000000000000000000000000000000000000000000001bc16d674ec80000", "0x0000000000000000000000000000000000000000000000000de0b6b3a7640000", "0x0000000000000000000000000000000000000000000000001bc16d674ec80000");
};
