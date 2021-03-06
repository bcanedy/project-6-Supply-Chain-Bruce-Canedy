# Coffee Supply Chain Application.

Allows track and trace coffeebeans from the farmer to your coffee maker.

## Features
* Tracks Farmers, Distributors, Retailers, and Customers
* Ability to set the owernership by roles to allow only certain groups to take action
* Tracks ownership of coffee bean supply as it changes hands

## Design

* Web interface that interacts with the Etherium blockchain using Web3
* UI that allows **farmers** to easily Harvest, Process, Pack, and Sale coffee beans
* UI that allows **distributors**, **retailers**, and **customer** to purchase, sale, and buy coffee beans
* UI to show track and trace information from Harvest to customer purchase

# Running code
* After downloading from github, run npm install to update your local node_modules
* Launch Ganache:
  ```
  ganache-cli -m "spirit supply whale amount human item harsh scare congress discover talent hamster"
  ```
* Compile Smart Contract
  ```
  truffle compile
  ```
* Migrate smart contracts to the locally running blockchain, ganache-cli:
  ```
  truffle migrate
  ```
* Test smart contracts:
  ```
  truffle test
  ```


# Renkeby Account Information

Below you will find each of the contracts migrated to Renkeby test network 

## Running migration: 1_initial_migration.js
  Deploying Migrations...
  ... 0x4ba25ddac5a97b405d0c2a7ce8b5a508a3a966234219623570c54c7546f0fd0d
  
  **Migrations.sol Contract**: 0xf2ed2771aa3db3d4f4ceea0c373b85c8fd24e162

Saving successful migration to network...
  ... 0xa9505170e657add43e2d94bb6cc5ca47f2735078bdd6f12faf0e43068351dec5
Saving artifacts...



## Running migration: 2_deploy_contracts.js
  - Deploying FarmerRole...
  ... 0x00fe7e1d58d9964bcf2343ca87116577df66e405be416d4835d356f52f0ae940
    -  **FarmerRole Contract**: 0xa4185aead150697709b8ac7be0fa24767578fc64
  - Deploying DistributorRole...
  ... 0x0b40fb78af7577e71e44db89b9c99e1e686a7df12e5cc3451a7bc7d351d5cafb
    - **DistributorRole Contract**: 0xb5c6e9dce16668107d6cf39cc2fa1828126c944c
  - Deploying RetailerRole...
  ... 0xa44744cebe931395a198c99d901fffba89dd6d49eb56f328738653b52c876fa0
    - **RetailerRole Contract**: 0x26508150749d39f808d33a589b9bb6989a256922
  - Deploying ConsumerRole...
  ... 0x7b959b46923dc68f56615c3c1a754799e868f38a30769bbe40622b06d52710d0
    - **ConsumerRole Contract**: 0x61f3932b55184c4271e21c32c20803e6775b7e0b
  - Deploying SupplyChain...
  ... 0x1a993486bd3944cfbc52905b5564f4d9a7f264c37047327e159c8c1fcdc42dd5
    - **SupplyChain Contract**: 0xc8f5face26586f5338c54705f66b4b79b5249bc5

Saving successful migration to network...
  ... 0xaac9e73fd8788e8a0822f995935b07026808844fc9ba82e1b23d78974629a1f2
Saving artifacts...

# Libraries

Please run npm install. Following this program : https://knowledge.udacity.com/questions/188272

* Truffle v4.1.14 (core: 4.1.14) - Toolchain is a development tool I used during my blockchain development to stand up a personal Ethereum blockchain
* web3 - ./src/js/web3.min.js - Development toolchain that allows me to interact with my local blockchain and testnet and mainnet blockchain with a set of Javascript libraries.
* Node v15.6.0
* Solidity v0.4.24 (solc-js)


# UML Documents

All documents under ./umlDocuments

# IPFS 

TBD - Did not use.