const { People } = require('../models');

function addPerson(name, description, naughtiness) {

  return People.create({name: name, description: description, naughtiness: naughtiness});
}

module.exports = {
  addPerson,
}