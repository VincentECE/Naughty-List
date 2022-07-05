const { getNaughtyList } = require('./getNaughtyList');
const { addToNaughtyList } = require('./addToNaughtyList');
const { deleteFromNaughtyList } = require('./deleteFromNaughtyList');
const { modifyPerson } = require('./modifyPerson');

module.exports = {
  getNaughtyList,
  addToNaughtyList,
  deleteFromNaughtyList,
  modifyPerson,
}