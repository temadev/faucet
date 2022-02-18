"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Migrations = artifacts.require('Migrations');
module.exports = function (deployer, network, accounts) {
    deployer.deploy(Migrations);
};
