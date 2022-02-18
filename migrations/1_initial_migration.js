"use strict";
const Migrations = artifacts.require('Migrations');
module.exports = (artifacts) => {
    return async (deployer, network, accounts) => {
        artifacts.require('Migrations');
        deployer.deploy(Migrations);
    };
};
// export {}
//# sourceMappingURL=1_initial_migration.js.map