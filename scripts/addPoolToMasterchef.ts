const ethers = require('ethers')
const abi = require('../contracts/build/contracts/MasterChef.json').abi
const masterchef_addr = '0x102D5a73B78855115be7FedBE428E828aC51Ea58'
const create_token_pair = process.env.CREATE_TOKEN_PAIR

// TODO get provider from secrets.json ?
const masterchef = new ethers.Contract(masterchef_addr, abi, ethers.getDefaultProvider('ropsten'))
// parameters:  allocation points (how many RBRYs to distribute per block),
//              lp token address (need to deploy a RBRY-BNB LP token FROM A FACTORY contract),
//              withUpdate boolean: whether to mass update pools (set to true just in case)
if (create_token_pair) {
    console.log("Creating a token pair...")

    // TODO does the RaspberryFactory contract have the address of RaspberryPair?
    const rbry_factory_addr = '0x102d5a73b78855115be7fedbe428e828ac51ea58'
    const rbry_factory = new ethers.Contract(rbry_factory_addr, require('../core-contracts/build/contracts/RaspberryPair.json'), ethers.getDefaultProvider('ropsten'))
    rbry_factory.createPair();
}
masterchef.add(15, "TODO", true)