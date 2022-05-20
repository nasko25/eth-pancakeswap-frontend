const ethers = require('ethers')
const abi = require('../../contracts/build/contracts/MasterChef.json').abi
const masterchef_addr = '0x102D5a73B78855115be7FedBE428E828aC51Ea58'

console.log(abi)
const masterchef = new ethers.Contract(masterchef_addr, abi, ethers.getDefaultProvider('ropsten'))

// fails probably because poolInfo[_pid] throws an index out of bounds
// so maybe when clicking on 'Connect Wallet' button should initialize poolInfo ?
masterchef.pendingRBRY(25, '0x145ABf73a136dc3Ad9BAA9f123553Dfcfd716D74')
