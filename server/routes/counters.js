var express = require('express');
var router = express.Router();
var { Counter } = require('../models');
const asyncHandler = require('express-async-handler');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });


router.get('/',  asyncHandler(async function(req, res, next) { // not used, good for testing
  res.send(await Counter.findAll());
}))

router.get('/:sessionID', asyncHandler(async function(req, res, next) {
  // console.log('get');
  if (typeof req.params.sessionID !== 'string') {
    res.status(400).send('sessionID must be string');
  } else {
    const foundCounter = await Counter.findByPk(req.params.sessionID);
    if (foundCounter) {
      res.send(foundCounter);
    } else {
      const newCounter = await Counter.create({sessionID: req.params.sessionID}); // initializing if not present, minimizing requests and making frontend logic easier
      res.send(newCounter);
    }
  }
}))

router.put('/:sessionID', asyncHandler(async function(req, res, next) {
  if (typeof req.params.sessionID !== 'string' || (typeof(req.body.counter) !== 'number' && req.body.counter !== undefined)) {
    res.status(400).send('sessionID must be string, counter must be number');
  } else {
    const foundCounter = await Counter.findByPk(req.params.sessionID);
    if (foundCounter) {
      if (typeof(req.body.counter) === 'number') {
        console.log('here');
        foundCounter.counter=req.body.counter;
        await foundCounter.save();
      }
      res.send(foundCounter);
    } else {
      const newCounter = await Counter.create({sessionID: req.params.sessionID, counter: req.body.counter || 0}); // initializing if not present, minimizing requests and making frontend logic easier
      res.send(newCounter);
      // res.status(404).send('sessionID not found');
    }
  }
}))

router.post('/:sessionID', asyncHandler(async function(req, res, next) { // not used, good for testing
  if (typeof req.params.sessionID !== 'string' || (req.body.counter!==undefined && typeof(req.body.counter)!=='number')) {
    res.status(400).send('sessionID must be string, counter must be number');
  } else {
    const newCounter = await Counter.create({sessionID: req.params.sessionID, counter: req.body.counter || 0});
    res.send(newCounter);
  }
}))

router.delete('/:sessionID', asyncHandler(async function(req, res, next) { // not used, good for testing
  if (typeof req.params.sessionID !== 'string') {
    res.status(400).send('sessionID must be string');
  } else {
    const foundCounter = await Counter.findByPk(req.params.sessionID);
    if (foundCounter) {
      await foundCounter.destroy();
      // res.send('Deleted');
    } else {
      // const newCounter = await Counter.create({sessionID: req.params.sessionID}); // initializing if not present, minimizing requests and making frontend logic easier
      // res.send(newCounter);
      // res.status(404).send('sessionID not found');
    }
    res.send('Deleted');
  }
}))

module.exports = router;