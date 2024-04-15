require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    sepolia: {
      url: `https://sepolia.infura.io/v3/473ac80c76404bdba5ec3e205d1bd585`,
      accounts: ['0x8e945cc7536b1d454adc20a961200a20c533db8030ecc525bfd74e87973f7f43']
    }
  },
  paths: {
    artifacts: "./client/src/artifacts",
  },
};







//0xcd5CE79F3d21e05A5fa5f97Ad5b287a40652F450