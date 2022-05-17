const Land = artifacts.require("Land");

module.exports = async function (deployer) {
    const NAME = "Hitaya"
    const SYMBOL = "DUB"
    const COST = web.utils.toWei('1', 'ether')

  await deployer.deploy(Land, NAME, SYMBOL, COST);
};
