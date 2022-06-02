const ethers = require('ethers')
const abi = require('../contracts/build/contracts/MasterChef.json').abi
const masterchef_addr = '0x102D5a73B78855115be7FedBE428E828aC51Ea58'
const create_token_pair = process.env.CREATE_TOKEN_PAIR
const secrets = require('../core-contracts/secrets.json')
const rbry_addr = '0xC4F1d37E1C07D77404cd50f36bb25492F8f38019'
const wbnb_addr = '0xb7D1CF6Bb087f24Fe17dAcEBB52ab2a93915f25D'

// TODO get provider from secrets.json ?
const masterchef = new ethers.Contract(masterchef_addr, abi, (new ethers.Wallet(secrets.mnemonic, ethers.getDefaultProvider('ropsten'))))
// parameters:  allocation points (how many RBRYs to distribute per block),
//              lp token address (need to deploy a RBRY-BNB LP token FROM A FACTORY contract),
//              withUpdate boolean: whether to mass update pools (set to true just in case)
if (create_token_pair) {
    console.log("Creating a token pair...")

    // TODO does the RaspberryFactory contract have the address of RaspberryPair?
    const rbry_factory_addr = '0x102d5a73b78855115be7fedbe428e828ac51ea58'
    const rbry_factory = new ethers.Contract(rbry_factory_addr, require('../core-contracts/build/contracts/RaspberryPair.json').abi, ethers.getDefaultProvider('ropsten'))
    rbry_factory.createPair(rbry_addr, wbnb_addr)
}
// masterchef.add(15, "TODO", true)