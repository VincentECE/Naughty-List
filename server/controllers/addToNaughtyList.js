const { People } = require('../models');

async function addToNaughtyList(name, description, naughtiness) {

  let exists = await People.exists({name: name});
  //check if name already exists in database
  if(exists) {
    let error = new Error('The name already exists in the database!');
    error.statusCode = 409;
    throw error;
  } else {
    return People.create({name: name, description: description, naughtiness: naughtiness});
  }

}

module.exports = {
  addToNaughtyList,
}