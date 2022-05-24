// const MasterChef = artifacts.require("MasterChef");
// const Multicall = artifacts.require("Multicall2");
// const RBRYToken = artifacts.require("RBRYToken");
// const SousChef = artifacts.require("SousChef");
// const SyrupBar = artifacts.require("SyrupBar");
// const Profile = artifacts.require("RaspberryProfile");
// const LinkToken = artifacts.require("LinkToken");
// const BlockhashStore = artifacts.require("BlockhashStore");
// const VRFCoordinator = artifacts.require("VRFCoordinator");
// const RNG = artifacts.require("RandomNumberGenerator");
// const Lottery = artifacts.require("RBRYSwapLottery");
// const RBRYVault = artifacts.require("RaspberryVault");
const WBNB = artifacts.require("WBNB");
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

    // rbry token address
    const rbry_addr = "0xC4F1d37E1C07D77404cd50f36bb25492F8f38019";
    // link token address on ropsten
    const link_addr = "0xEFB6eD65c056299d64614c5687Cb75DE2709c2b5";

    // BlockhashStore address
    const blockhashStoreAddr = "0x75a0766eb65f3c421a8d0d7b6ec44036a5002558";
    // VRFCoordinator address
    const vrf_coord_addr = "0xb444b2907741a9D9EB85125a904255A3A6184f24";

    const rng_addr = "0xd9d4DFA8C5e6e1331eBa44F6BA47F666F183e745";
    const lottery_addr = "0x38bd5D01202BBf0dC0dAf9a436A6345b4D6f69bD";
    const masterchef_addr = "0x102D5a73B78855115be7FedBE428E828aC51Ea58";
    const deploying_addr = "0x145ABf73a136dc3Ad9BAA9f123553Dfcfd716D74";
    const syrupbar_addr = "0x5712b0ab635A3F27e00837C6583B1F2c24d68459";

    // TODO deploy BlockhashStore, to be able to deploy VRFCoordinator, which is needed for the RNG, needed for the lottery
    // deployer.deploy(BlockhashStore).then(async () => {
        // for some reason the blockhashstore contract took too long to be deployed right now, so it had to be a separate transaction
        // /* await */ deployer.deploy(VRFCoordinator, link_addr, blockhashStoreAddr); // BlockhashStore.address);
    // });

    // TODO for the RBRYSwapLottery try to reduce the size of the contract:
    // `npm install truffle-contract-size`
    // plugins: ["truffle-contract-size"] to the truffle config
    // `truffle run contract-size`
    // deployer.deploy(RNG, vrf_coord_addr, link_addr).then(async () => {
        // TODO max code size exceeded error when trying to deploy
        // deployer.deploy(Lottery, rbry_addr, rng_addr); // RNG.address);
    // });
                                                                           // _admin       // _treasury
    // deployer.deploy(RBRYVault, rbry_addr, syrupbar_addr, masterchef_addr, deploying_addr, deploying_addr)
    // txn hash: 0x72647e25bbfbc85fea20817eaac7cc689e6a0dbf13bd80fab6c3b9b7845cd747
    const rbry_vault_addr = "0xFB5591cB6c3983AEF94D7D64a6bCc88cA9622D98";
    const muticall_addr = "0xec784B82b16f48E022B35310e4a5b538778Df815";

    deployer.deploy(WBNB);
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
