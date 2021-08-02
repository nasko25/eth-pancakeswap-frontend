import { ChainId } from '@pancakeswap/sdk'

// TODO update ChainId everywhere
//import { ChainId } from '@uniswap/sdk'

const NETWORK_URLS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: 'https://bsc-dataseed1.defibit.io',
  [ChainId.TESTNET]: 'https://data-seed-prebsc-1-s1.binance.org:8545',
}

// TODO probably use infura with: `https://rinkeby.infura.io/v3/${process.env.PROJECT_ID}`
//const NETWORK_URLS: { [chainId in ChainId]: string } = {
//  [ChainId.MAINNET]: 'https://main-light.eth.linkpool.io',
//  [ChainId.ROPSTEN]: 'https://ropsten.infura.io',
//  [ChainId.RINKEBY]: 'https://rinkeby-light.eth.linkpool.io',
//  [ChainId.GÖRLI]: 'https://goerli-light.eth.linkpool.io',
//  [ChainId.KOVAN]: 'https://kovan.infura.io',
//}

export default NETWORK_URLS
