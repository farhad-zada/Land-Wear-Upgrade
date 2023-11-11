const { ethers, upgrades } = require("hardhat");
const logg = require("./logg");
require("dotenv").config();

async function main() {
  const Land = await ethers.getContractFactory("Land");

  console.log("Waiting the transaction... ✨");
  const land = await upgrades.upgradeProxy(process.env.LAND_PROXY, Land);
  logg(land);
  return "success ✨";
}

main().catch((err) => {
  console.log(err);
  process.exitCode = 1;
});
