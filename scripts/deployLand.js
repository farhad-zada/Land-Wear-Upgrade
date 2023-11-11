const { ethers, upgrades } = require("hardhat");
const logg = require("./logg");
require("dotenv").config();

async function main() {
  const Land = await ethers.deployContract("Land");

  console.log("Waiting the transaction... ✨");
  const land = await Land.waitForDeployment();
  logg(land);
  return "success ✨";
}

main().catch((err) => {
  console.log(err);
  process.exitCode = 1;
});
