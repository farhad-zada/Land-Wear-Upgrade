module.exports = (contract) => {
  console.log("Contract deployed at 🍺");
  console.log(`Address: ${contract.target}`);
  console.log("Find in the block explorer: ");
  console.log(`https://bscscan.com/address/${contract.target}`);
};
