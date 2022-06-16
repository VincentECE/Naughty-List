const { People } = require('../models');

async function addToNaughtyList(name, description, naughtiness) {

  let exists = await People.exists({name: name});
  console.log('line 6', exists);
  //check if name already exists in database
  if(exists) {
    let error = new Error('The name already exists in the database!');
    error.statusCode = 409;
    console.log('line 10:', error);
    throw error;
  } else {
    return People.create({name: name, description: description, naughtiness: naughtiness});
  }

}

module.exports = {
  addToNaughtyList,
}