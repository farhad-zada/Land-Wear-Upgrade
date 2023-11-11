const { ethers, upgrades } = require("hardhat");
const logg = require("./logg");
require("dotenv").config();

async function main() {
  const Wear = await ethers.getContractFactory("MetawearBurnable");

  console.log("Waiting the transaction... ✨");
  const wear = await upgrades.upgradeProxy(process.env.WEAR_PROXY, Wear);
  logg(wear);
  return "success ✨";
}

main().catch((err) => {
  console.log(err);
  process.exitCode = 1;
});
