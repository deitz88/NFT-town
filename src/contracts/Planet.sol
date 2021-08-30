pragma solidity >=0.5.0 <0.9.0;
// SPDX-License-Identifier: MIT

import "@openzeppelin/contracts/token/ERC721/ERC721Full.sol";

contract Planet is ERC721Full {
    constructor() ERC721Full("Planet", "PLT") public {
    }
}