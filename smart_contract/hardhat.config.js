// https://eth-ropsten.alchemyapi.io/v2/3QSxCwN-bIZu4wHjrJGj25VpTIN_NOki

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/3QSxCwN-bIZu4wHjrJGj25VpTIN_NOki",
      accounts: [
        "33ced488a0d1caf9c0b681d5e4498dd4ef594aaadd638499a4e3d97fd25f76f7",
      ],
    },
  },
};
