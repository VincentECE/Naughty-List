const router = require('express').Router();
const { getNaughtyList, addToNaughtyList } = require('./controllers');


router.get('/naughtyList', (req, res) => {
  getNaughtyList()
  .then((data)=> {
    res.send(data);
  })
  .catch((err) => {
    res.send(err);
  });
});

router.post('/addToNaughtyList', (req, res) => {
  const {name, description, naughtyLevel} = req.body;

  addToNaughtyList(name, description, naughtyLevel)
  .then((data) => {
    res.status(201).send(); //remember to send status code
  })
  .catch((err) => {
    res.status(err.statusCode).send(err.message);
  });
});

module.exports = router;