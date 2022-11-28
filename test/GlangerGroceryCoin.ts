import { expect, assert } from "chai";
import { ethers } from "hardhat";
import { GlangerGroceryCoin } from '../typechain-types/contracts/GlangerGroceryCoin';

describe("Glanger Grocery Coin", () => {
    let contract : GlangerGroceryCoin;

    beforeEach(async () => {
        const glangegroceryCoin = await ethers.getContractFactory("GlangerGroceryCoin");
        contract = await glangegroceryCoin.deploy(10000);
        await contract.deployed();
    })

    describe("Glanger Grocery Coin", () => {
        it("mint 10000 worth of tokens", async () => {
            const [owner] = await ethers.getSigners();
            let balance = await contract.balanceOf(owner.address);
            console.log(balance);
            expect(balance).to.be.equal(ethers.utils.parseEther("10000"));
        });

        it("transfer to another account", async () => {
            const [owner, account1] = await ethers.getSigners();
            await contract.transfer(account1.address, ethers.utils.parseEther("100"));
            let ownerBalance = await contract.balanceOf(owner.address);
            expect(ownerBalance).to.be.equal(ethers.utils.parseEther("9900"));
            let account1Balance = await contract.balanceOf(account1.address);
            expect(account1Balance).to.be.equal(ethers.utils.parseEther("100"));
        })
    })
})