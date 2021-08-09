pragma solidity =0.5.16;

import '../RaspberryERC20.sol';

contract ERC20 is RaspberryERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}
