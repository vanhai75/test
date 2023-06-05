async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Token = await ethers.getContractFactory("TokenLocker");
  const token = await Token.deploy(
    process.env.TOKEN,
    process.env.BENEFICIARY,
    100
  );

  console.log("Token address:", token.address);
}
1;
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
