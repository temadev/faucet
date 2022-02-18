"use strict";
const FaucetContract = artifacts.require('Faucet');
module.exports = (artifacts) => {
    return async (deployer, network, accounts) => {
        artifacts.require('Migrations');
        deployer.deploy(FaucetContract);
    };
};
// export {}
//# sourceMappingURL=2_faucet_migration.js.map