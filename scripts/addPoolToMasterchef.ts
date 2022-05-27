const ethers = require('ethers')
const abi = require('../contracts/build/contracts/MasterChef.json').abi
const masterchef_addr = '0x102D5a73B78855115be7FedBE428E828aC51Ea58'

// TODO get provider from secrets.json ?
const masterchef = new ethers.Contract(masterchef_addr, abi, ethers.getDefaultProvider('ropsten'))
// parameters:  allocation points (how many RBRYs to distribute per block),
//              lp token address (need to deploy a RBRY-BNB LP token FROM A FACTORY contract),
//              withUpdate boolean: whether to mass update pools (set to true just in case)
masterchef.add(15, "TODO", true)