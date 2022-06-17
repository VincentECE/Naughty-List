const { People } = require('../models');

async function deleteFromNaughtyList(name) {

    let deleteStatus = await People.findOneAndDelete({name: name});
    if(deleteStatus === null) { // deleteStatus is null if name doesn't exist
      const error = new Error("Cannot delete. The name doesn't exist in the database");
      error.statusCode = 400;
      throw error;
    } else {
      return deleteStatus;
    }

}

module.exports = {
  deleteFromNaughtyList,
}