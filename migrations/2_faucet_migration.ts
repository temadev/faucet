const FaucetContract = artifacts.require('Faucet')

module.exports = function (deployer: Truffle.Deployer, network: string, accounts: string[]) {
  artifacts.require('Migrations')
  deployer.deploy(FaucetContract)
}

export {}
