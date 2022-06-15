const router = require('express').Router();
const { getNaughtyList, addToNaughtyList } = require('./controllers');


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

router.post('/addToNaughtyList', (req, res) => {
  const {name, description, naughtyLevel} = req.body;

  addToNaughtyList(name, description, naughtyLevel)
  .then((data) => {
    console.log('data: ', data)
    res.send(); //remember to send status code
  })
  .catch((err) => {
    res.send(err.message);
  });
});

module.exports = router;