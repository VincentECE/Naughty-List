const router = require('express').Router();
const { getNaughtyList,
  addToNaughtyList,
  deleteFromNaughtyList,
  modifyPerson,
} = require('./controllers');


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

router.delete('/delete', (req, res) => {
  const name = req?.body.name;
  deleteFromNaughtyList(name)
  .then(()=>{
    res.status(202).send();
  })
  .catch((err)=>{
    res.status(err.statusCode).send();
  });

});

router.patch('/modifyPerson', (req, res)=> {
  const { name, description, naughtyLevel } = req.body;

  modifyPerson(name, description, naughtyLevel)
  .then(()=> {
    res.status(202).send();
  })
  .catch((err)=>{
    res.send(err);
  });

});

module.exports = router;