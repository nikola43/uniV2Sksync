// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract Token is ERC20, ERC20Burnable {
    uint8 private _decimals = 18;
    constructor(
        string memory _name,
        string memory _symbol,
        uint8 precision,
        uint256 supply,
        address to
    ) ERC20(_name, _symbol) {
        _decimals = precision;
        _mint(to, supply * 10 ** decimals());
    }

    function decimals() public view virtual override returns (uint8) {
        return _decimals;
    }
}
