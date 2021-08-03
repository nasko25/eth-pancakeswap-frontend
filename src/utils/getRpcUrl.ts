import sample from 'lodash/sample'

// Array of available nodes to connect to
export const nodes = [process.env.REACT_APP_NODE_1, process.env.REACT_APP_NODE_2, process.env.REACT_APP_NODE_3]

const getNodeUrl = () => {
  //return sample(nodes)
  // always choose the first node
  return nodes[0]
}

export default getNodeUrl
