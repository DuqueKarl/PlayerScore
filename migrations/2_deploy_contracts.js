const PlayerScore = artifacts.require("PlayerScore");

module.exports = function(deployer) {
  deployer.deploy(PlayerScore);
};
