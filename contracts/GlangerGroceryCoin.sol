// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract GlangerGroceryCoin is ERC20 {
    
    constructor(uint256 initialSupply) ERC20("Glanger Grocery Coin", "GGC") {
        _mint(msg.sender, initialSupply * 10**decimals());
    } 
}