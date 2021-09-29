// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract MyToken is ERC721, ERC721URIStorage {
    string private _baseURIextended;
    
    constructor(string memory name, string memory symbol, string memory baseURI) ERC721(name, symbol) {
        _baseURIextended = baseURI;

    }
    
    function setBaseURI(string memory baseURI_) external {
        _baseURIextended = baseURI_;
    }
    
    function _baseURI() internal view override returns (string memory) {
        return _baseURIextended;
    }

    function _burn(uint256 tokenId)
        internal
        override(ERC721, ERC721URIStorage)
    {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }
}

