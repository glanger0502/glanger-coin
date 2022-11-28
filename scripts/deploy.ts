import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const GlangerGroceryCoin = await ethers.getContractFactory("GlangerGroceryCoin");
  const glangerGroceryCoin = await GlangerGroceryCoin.deploy(1000000000);

  console.log("Token address:", glangerGroceryCoin.balanceOf(deployer.address));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
