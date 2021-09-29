import { ethers } from "hardhat";
import {
    expandTo18Decimals,
  } from './shared/utilities'
import { expect } from "chai";
import { Signer } from "ethers";
import { ERC721LazyMint } from '../types/ERC721LazyMint';
import { ERC721LazyMint__factory } from '../types/factories/ERC721LazyMint__factory';

import tokens from "./token.json";

describe("LazyMinting", function () {
    let erc721: ERC721LazyMint | undefined;
    let alice: Signer | undefined;
    let dave: Signer | undefined;
    let redeemer: Signer | undefined;

    function hashToken(tokenId: string, account: string) {
        return ethers.utils.arrayify(ethers.utils.solidityKeccak256(['address', 'uint256'], [account, tokenId]));
    }

    beforeEach(async function () {
        try {
            [alice, dave, redeemer] = await ethers.getSigners();
            const daveAddress = await dave.getAddress();

            erc721 = await new ERC721LazyMint__factory(alice).deploy("King Knight", "KNIGHT");
            await erc721.grantRole(await erc721.MINTER_ROLE(), daveAddress);            
        } catch (err) {
            console.log(err.message);
        }
    });

    describe("Lazy Minting", async () => {
        it("Users be able to reddem if they provider valid signature is signed by MINTER", async () => {
            if (dave && erc721) {
                for (let [tokenId, address] of Object.entries(tokens)) {
                    const messageHash = hashToken(tokenId, address);
                    const signature = await dave.signMessage(messageHash);
                    await expect(erc721.redeem(address, tokenId, signature)).to.be.emit(erc721, "Transfer").withArgs("0x0000000000000000000000000000000000000000", address, tokenId);
                }

                const owner = await erc721.ownerOf("56660740342816081431743222872731117427526580551422435935884080137676694505177");
                expect(owner).to.be.equals("0xa111C225A0aFd5aD64221B1bc1D5d817e5D3Ca15");
            }
        });

        it("Users not be able to reddem twice if they provider same signature", async () => {
            if (dave && redeemer && erc721) {
                const redeemerAddress = await redeemer.getAddress();
                const tokenId = "1";

                const messageHash = hashToken(tokenId, redeemerAddress);
                const signature = await dave.signMessage(messageHash);

                await erc721.redeem(redeemerAddress, tokenId, signature);
                await expect(erc721.redeem(redeemerAddress, tokenId, signature)).to.be.revertedWith("ERC721: token already minted");
            }
        })
    });
});
