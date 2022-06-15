const router = require('express').Router();
const { getNaughtyList, addPerson } = require('./controllers');


router.get('/naughtyList', (req, res) => {
  console.log('yeah man')
  getNaughtyList()
  .then((data)=> {
    res.send(data);
  })
  .catch((err) => {
    res.send(err.message);
  });
});

router.post('/addPerson', (req, res) => {
  const {name, description, naughtiness} = req.body;

  addPerson(name, description, naughtiness)
  .then((data) => {
    res.send();
  })
  .catch((err) => {
    res.send(err.message);
  });
});

module.exports = router;