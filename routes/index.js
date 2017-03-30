var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var character = mongoose.model('character');
var monster = mongoose.model('monster');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


//CREATE NEW PLAYER
router.post('/characters', function(req, res) {
  console.log('call to post new character');
  var Character = new character(req.body);
  Character.save(function(err, character) {
    if(err){return next(err)};
    res.json(character);
  });
});

//CREATE NEW MONSTER
router.post('/monsters', function(req, res) {
  console.log('call to post new character');
  var Monster = new monster(req.body);
  Character.save(function(err, monster) {
    if(err){return next(err)};
    res.json(monster);
  });
});

//GET CHARACTERS
router.get('/characters', function(req, res) {
  console.log('call to get characters');
  character.find({}, function(err, characters) {
    if (err){ return next(err)};
    res.json(characters);
  });
});


//UPDATE CHARACTER INFORMATION
/*
router.put('/characters', function() {
  console.log('call to update character');
}
*/

//REMOVE CHARACTER
/*
router.delete('/characters', function() {
  console.log('call to delete character')
}
*/

//- - - - - - - - - - - - - - - - - - - - - - - - - -

module.exports = router;
