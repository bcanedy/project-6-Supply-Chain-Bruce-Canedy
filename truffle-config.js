const HDWallet = require('truffle-hdwallet-provider');
const infuraKey = "aea7c5abafb04cae85d0e49d34d7d477";
//
const fs = require('fs');
// const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
      rinkeby: {
      provider: () => new HDWallet(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000
    }
  },
  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },
  compilers: {
    solc: {
      version: "^0.4.23"
    }
  }
};