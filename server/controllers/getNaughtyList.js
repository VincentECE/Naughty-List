const { People } = require('../models');

function getNaughtyList() {
  return People.find({});
}

module.exports = {
  getNaughtyList,
};