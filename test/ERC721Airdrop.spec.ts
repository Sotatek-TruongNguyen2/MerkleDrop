import { ethers, network } from "hardhat";
import {
    expandTo18Decimals,
  } from './shared/utilities'
import { expect } from "chai";
import { Signer } from "ethers";
import MerkleTree from 'merkletreejs';
import keccak256 from 'keccak256';

import { ERC721MerkleDrop } from '../types/ERC721MerkleDrop';
import { ERC721MerkleDrop__factory } from '../types/factories/ERC721MerkleDrop__factory';

import tokens from "./token.json";

describe("NFT Airdrop", function () {
    let erc721: ERC721MerkleDrop | undefined;
    let alice: Signer | undefined;
    let dave: Signer | undefined;
    let redeemer: Signer | undefined;
    let merkleTree: MerkleTree;

    function hashToken(account: string, tokenId: string) {
        return Buffer.from(ethers.utils.solidityKeccak256(['address', 'uint256'], [account, tokenId]).slice(2), 'hex');
    }

    beforeEach(async function () {
        try {
            [alice, dave, redeemer] = await ethers.getSigners();

            merkleTree = new MerkleTree(
                Object.entries(tokens)
                .map(([tokenId, address]) => {
                    return hashToken(address, tokenId);
                }),
                keccak256,
                {
                    sortPairs: true
                }
            );

            console.log(merkleTree);

            erc721 = await new ERC721MerkleDrop__factory(alice).deploy("Dark Kinght", "DNIGHT", merkleTree.getHexRoot());
        } catch (err) {
            console.log(err.message);
        }
    });

    describe("NFT Airdrop Merkle Tree", async () => {
        it("Users be able to reddem if they provider valid merle tree proof", async () => {
            if (dave && erc721) {
                const address = "0xa111C225A0aFd5aD64221B1bc1D5d817e5D3Ca15";
                const tokenId = "56660740342816081431743222872731117427526580551422435935884080137676694505177";
                const proof = merkleTree.getHexProof(hashToken(address, tokenId));
                console.log(proof);
                await expect(erc721.redeem(proof, address, tokenId)).to.be.emit(erc721, "Transfer").withArgs("0x0000000000000000000000000000000000000000", address, tokenId);
            }
        });

        xit("Users not be able to reddem if they provider valid merle tree proof", async () => {
            if (dave && erc721) {
                const address = "0xa111C225A0aFd5aD64221B1bc1D5d817e5D3Ca15";
                const tokenId = "56660740342816081431743222872731117427526580551422435935884080137676694505176";
                const proof = merkleTree.getHexProof(hashToken(address, tokenId));
                await expect(erc721.redeem(proof, address, tokenId)).to.be.revertedWith("INVALID MERKLE PROOF!");
            }
        });
    });
});
