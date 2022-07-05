const { People } = require('../models');

async function modifyPerson(name, description, naughtyLevel) {
  try{
    await People.findOneAndUpdate({name, description, naughtyLevel})
  } catch(err) {

  }
}

module.exports = {
  modifyPerson,
}