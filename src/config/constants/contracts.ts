export default {
  // TODO use masterchef_eth.json as the abi for the eth masterchef equivalent depending on the chain:
  // import { useWeb3React } from '@web3-react/core'
  // const { chainId } = useWeb3React();
  masterChef: {
    // https://github.com/pancakeswap/pancake-farm/blob/master/contracts/MasterChef.sol
    97: '0x1d32c2945C8FDCBc7156c553B7cEa4325a17f4f9', // bsc testnet
    56: '0x73feaa1eE314F8c655E354234017bE2193C9E24E', // bsc mainnet
    3: '0x102D5a73B78855115be7FedBE428E828aC51Ea58', // ropsten
  },
  sousChef: {
    // https://github.com/pancakeswap/pancake-farm/blob/master/contracts/SousChef.sol
    97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
    56: '0x6ab8463a4185b80905e05a9ff80a2d6b714b9e95',
    3: '0x7C23faB097DAf45e50FDdEAFf218e7B738a5EC52',
  },
  lotteryV2: {
    // https://docs.pancakeswap.finance/code/smart-contracts/lottery-v2
    97: '0x5790c3534F30437641541a0FA04C992799602998',
    56: '0x5aF6D33DE2ccEC94efb1bDF8f92Bd58085432d2c',
    3: 'TODO lottery',
  },
  multiCall: {
    // https://github.com/pancakeswap/pancake-farm/blob/master/contracts/libs/Multicall.sol
    56: '0xfF6FD90A470Aaa0c1B8A54681746b07AcdFedc9B',
    97: '0x8F3273Fb89B075b1645095ABaC6ed17B2d4Bc576',
    3: '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696', // Multicall2 by Uniswap
  },
  pancakeProfile: {
    // "contract for users to bind their address to a customizable profile by depositing a NFT"
    // https://www.bscscan.com/address/0xDf4dBf6536201370F95e06A0F8a7a70fE40E388a#code
    56: '0xDf4dBf6536201370F95e06A0F8a7a70fE40E388a',
    97: '0x4B683C7E13B6d5D7fd1FeA9530F451954c1A7c8A',
    3: '0xC022Fc82BA4DA37d7A58678F34d3768F8ddFB147',
  },
  pancakeRabbits: {
    // PancakeBunnies ERC721 contract
    // probably connected to the pancake profile
    // https://bscscan.com/address/0xDf7952B35f24aCF7fC0487D01c8d5690a60DBa07#code
    56: '0xDf7952B35f24aCF7fC0487D01c8d5690a60DBa07',
    97: '0x60935F36e4631F73f0f407e68642144e07aC7f5E',
    3: 'TODO',
  },
  bunnyFactory: {
    // BunnyFactoryV3
    // probably connected to the pancake profile
    // https://bscscan.com/address/0xfa249Caa1D16f75fa159F7DFBAc0cC5EaB48CeFf#code
    56: '0xfa249Caa1D16f75fa159F7DFBAc0cC5EaB48CeFf',
    97: '0x707CBF373175fdB601D34eeBF2Cf665d08f01148',
    3: 'TODO',
  },
  claimRefund: {
    // ClaimBackCake
    // https://bscscan.com/address/0xE7e53A7e9E3Cf6b840f167eF69519175c497e149#code
    56: '0xE7e53A7e9E3Cf6b840f167eF69519175c497e149',
    97: '',
    3: 'TODO?',
  },
  pointCenterIfo: {
    // XXX: It will probably be useful
    // "contract for users to collect points for IFOs they participated in"
    // https://bscscan.com/address/0x3C6919b132462C1FEc572c6300E83191f4F0012a#code
    56: '0x3C6919b132462C1FEc572c6300E83191f4F0012a',
    97: '0xd2Ac1B1728Bb1C11ae02AB6e75B76Ae41A2997e3',
    3: 'TODO',
  },
  bunnySpecial: {
    // BunnySpecialV2
    // https://bscscan.com/address/0xFee8A195570a18461146F401d6033f5ab3380849#code
    56: '0xFee8A195570a18461146F401d6033f5ab3380849',
    97: '0x7b7b1583De1DeB32Ce6605F6deEbF24A0671c17C',
    3: 'TODO',
  },
  tradingCompetition: {
    // XXX: It is probably important
    // "contract for users to collect points based on off-chain events"
    56: '0xd718baa0B1F4f70dcC8458154042120FFE0DEFFA',
    97: '0xC787F45B833721ED3aC46E99b703B3E1E01abb97',
    3: 'TODO',
  },
  easterNft: {
    // BunnySpecialV2
    // "contract for users to mint exclusive Easter collectibles for their teams"
    56: '0x23c41D28A239dDCAABd1bb1deF8d057189510066',
    97: '0x24ec6962dbe874F6B67B5C50857565667fA0854F',
    3: 'TODO',
  },
  cakeVault: {
    // TODO deploy?
    // "Auto CAKE Syrup Pool Smart Contract"
    // https://bscscan.com/address/0xa80240Eb5d7E05d3F250cF000eEc0891d00b51CC#code
    56: '0xa80240Eb5d7E05d3F250cF000eEc0891d00b51CC',
    97: '',
    3: 'TODO',
  },
  predictions: {
    // BnbPricePrediction
    // https://bscscan.com/address/0x516ffd7D1e0Ca40b1879935B2De87cb20Fc1124b#code
    56: '0x516ffd7D1e0Ca40b1879935B2De87cb20Fc1124b',
    97: '0x4f3140C74789F1D809420343ea83BcE52B7bbAA5',
    3: 'TODO',
  },
  chainlinkOracle: {
    // EACAggregatorProxy
    56: '0x0567F2323251f0Aab15c8dFb1967E4e8A7D42aeE',
    97: '',
    1: '0x7c5d4F8345e66f68099581Db340cd65B078C41f4', // eth mainnet
    3: '0x1e5a19e9f382DD254D6983FF253A64F0bF15058a', // ropsten eth testnet
  },
  bunnySpecialCakeVault: {
    // BunnySpecialCakeVault
    // "contract for users to mint Cake Vault collectible"
    56: '0x5B4a770Abe7Eafb2601CA4dF9d73EA99363E60a4',
    97: '',
    3: 'TODO?',
  },
  bunnySpecialPrediction: {
    // contract for users to mint exclusive collectibles if they participated in Prediction beta.
    56: '0x342c99e9aC24157657095eC69CB04b73257e7A9C',
    97: '',
    3: 'TODO?',
  },
  farmAuction: {
    // FarmAuction
    // https://bscscan.com/address/0xb92Ab7c1edcb273AbA24b0656cEb3681654805D2#code
    56: '0xb92Ab7c1edcb273AbA24b0656cEb3681654805D2',
    97: '0x3F9602593b4f7C67ab045DB51BbDEa94E40fA9Fe',
    3: 'TODO',
  },
}
