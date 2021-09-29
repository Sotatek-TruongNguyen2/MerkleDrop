// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";

contract ERC721LazyMint is ERC721, AccessControl {
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

    constructor(string memory name, string memory symbol)
    ERC721(name, symbol)
    {
        _setupRole(DEFAULT_ADMIN_ROLE, _msgSender());
    }

    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC721, AccessControl) returns (bool) {
        return super.supportsInterface(interfaceId);
    }

    function _hash(address _account, uint _tokenId) internal pure returns(bytes32 hash) {
        hash = ECDSA.toEthSignedMessageHash(keccak256(abi.encodePacked(_account, _tokenId)));
    }

    function _verify(bytes32 digest, bytes memory signature) internal view returns(bool) {
        return hasRole(MINTER_ROLE, ECDSA.recover(digest, signature));
    }

    function redeem(address _account, uint _tokenId, bytes memory signature) external {
        require(_verify(_hash(_account, _tokenId), signature), "Signature is not valid!");
        _safeMint(_account, _tokenId);
    }
}