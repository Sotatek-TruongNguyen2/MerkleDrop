// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import "@openzeppelin/contracts/utils/cryptography/draft-EIP712.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

contract ERC721MerkleDrop is ERC721, EIP712 {
    bytes32 public root;

    constructor(string memory name, string memory symbol, bytes32 _root)
    ERC721(name, symbol)
    EIP712(name, "1.0.0")
    {
        root = _root;
    }

    function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {
        return super.supportsInterface(interfaceId);
    }

    function _leaf(address _account, uint _tokenId) internal pure returns(bytes32 hash) {
        hash = keccak256(abi.encodePacked(_account, _tokenId));
    }

    function _verify(bytes32[] memory proof, bytes32 leaf) internal view returns(bool) {
        return MerkleProof.verify(proof, root, leaf);
    }

    function redeem(bytes32[] memory proof, address _account, uint _tokenId) external {
        require(_verify(proof, _leaf(_account, _tokenId)), "INVALID MERKLE PROOF!");
        _safeMint(_account, _tokenId);
    }
}