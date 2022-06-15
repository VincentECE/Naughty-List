const { People } = require('../models');

function addToNaughtyList(name, description, naughtiness) {

  return People.create({name: name, description: description, naughtiness: naughtiness}).exec();
}

module.exports = {
  addToNaughtyList,
}