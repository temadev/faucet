const Migrations = artifacts.require('Migrations')

module.exports = (artifacts: Truffle.Artifacts) => {
  return async (deployer: Truffle.Deployer, network: string, accounts: string[]) => {
    artifacts.require('Migrations')
    deployer.deploy(Migrations)
  }
}

export {}
