const { getNaughtyList } = require('./getNaughtyList');
const { addToNaughtyList } = require('./addToNaughtyList');
const { deleteFromNaughtyList } = require('./deleteFromNaughtyList');

module.exports = {
  getNaughtyList,
  addToNaughtyList,
  deleteFromNaughtyList,
}