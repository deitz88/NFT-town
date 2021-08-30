pragma solidity >=0.5.0 <0.9.0;
// SPDX-License-Identifier: MIT

import "@openzeppelin/contracts/token/ERC721/ERC721Full.sol";

contract Mask is ERC721Full {
    string[] public masks;
    // mapping(string => uint) _numberMaksExist;
    mapping(string => bool) _maskExists;
    constructor() ERC721Full("Mask", "QRT") public {
    }
    function mint(string memory _mask) public {
        //require owner - me!
        require(!_maskExists[_mask]);
        uint _id = masks.push(_mask);
        _mint(msg.sender, _id);
        _maskExists[_mask] = true;

    }
}