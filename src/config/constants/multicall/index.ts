import { ChainId } from '@pancakeswap/sdk'
import { ChainId as ethChainId } from '@uniswap/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId & ethChainId]: string } = {
  [ChainId.MAINNET]: '0x1Ee38d535d541c55C9dae27B12edf090C608E6Fb',
  [ChainId.TESTNET]: '0x301907b5835a2d723Fe3e9E8C5Bc5375d5c1236A',
  [ethChainId.MAINNET]: '0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441',
  [ethChainId.ROPSTEN]: '0x53C43764255c17BD724F74c4eF150724AC50a3ed',
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
