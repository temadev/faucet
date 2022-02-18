const FaucetContract = artifacts.require('Faucet')

module.exports = (artifacts: Truffle.Artifacts) => {
  return async (deployer: Truffle.Deployer, network: string, accounts: string[]) => {
    artifacts.require('Migrations')
    deployer.deploy(FaucetContract)
  }
}

export {}
