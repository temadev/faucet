const Migrations = artifacts.require('Migrations')

module.exports = function (deployer: Truffle.Deployer, network: string, accounts: string[]) {
  deployer.deploy(Migrations)
}

export {}
