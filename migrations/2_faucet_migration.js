"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FaucetContract = artifacts.require('Faucet');
module.exports = function (deployer, network, accounts) {
    artifacts.require('Migrations');
    deployer.deploy(FaucetContract);
};
