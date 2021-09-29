// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import "@openzeppelin/contracts/utils/cryptography/draft-EIP712.sol";

contract ERC721LazyMintEIP712 is ERC721, EIP712, AccessControl {
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

    constructor(string memory name, string memory symbol)
    ERC721(name, symbol)
    EIP712(name, "1.0.0")
    {
        _setupRole(DEFAULT_ADMIN_ROLE, _msgSender());
    }

    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC721, AccessControl) returns (bool) {
        return super.supportsInterface(interfaceId);
    }

    function _hash(address _account, uint _tokenId) internal view returns(bytes32 hash) {
        hash = _hashTypedDataV4(keccak256(abi.encode(
            keccak256("NFT(address account,uint256 tokenId)"),
            _account,
            _tokenId
        )));
    }

    function _verify(bytes32 digest, bytes memory signature) internal view returns(bool) {
        return hasRole(MINTER_ROLE, ECDSA.recover(digest, signature));
    }

    function redeem(address _account, uint _tokenId, bytes memory signature) external {
        require(_verify(_hash(_account, _tokenId), signature), "Signature is not valid!");
        _safeMint(_account, _tokenId);
    }
}