const express = require('express');
const router = express.Router();
const programmingLanguages = require('../services/programmingLanguage');

/* GET programming languages */
router.get('/', async function(req, res, next){
  try{
    // console.log(`Query: ${req.query}`);
    // console.log(`Page: ${req.query.page}`);
    res.json(await programmingLanguages.getMultiple(req.query.page));
  }catch(err){
    console.log(`Error while getting programming languages `, err.message);
    next(err);
  }
});

/* POST programming language */
router.post('/', async function(req, res, next){
  try{
    res.json(await programmingLanguages.create(req.body));
  }catch(err){
    console.error('Error while creating language.', err.message);
    next(err);
  }
});

/* PUT programming language */
router.put('/:id', async function(req, res, next){
  try{
    res.json(await programmingLanguages.update(req.params.id, req.body));
  }catch(err){
    console.error('Error while updating language.', err.message);
    next(err);
  }
});

/* DELETE programming language */
router.delete('/:id', async function(req, res, next){
  try{
    res.json(await programmingLanguages.remove(req.params.id));
  }catch(err){
    console.error('Error while deleting language.', err.message);
    next(err);
  }
});


module.exports = router;