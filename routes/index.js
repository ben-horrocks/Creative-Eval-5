var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var character = mongoose.model('character');
var monster = mongoose.model('monster');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


//CREATE NEW CHARACTER
router.post('/characters', function() {
  console.log('call to post new character');
  var Character = new character(req.body);
  Character.save(function(err, character) {
    if(err){return next(err)};
    res.json(character);
  });
});


//GET CHARACTERS
router.get('/characters', function() {
  console.log('call to get characters');
  character.find(function(err, characters) {
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

//CREATE NEW MONSTER
router.post('/monsters', function() {
  console.log('call to post new monster');
  var Monster = new monster(req.body);
  Monster.save(function(err, monster) {
    if(err){ return next(err) };
    res.json(monster);
  });
});

//GET MONSTERS
router.get('/monsters', function() {
  console.log('call to get monsters');
  monster.find(function(err, monsters) {
    if (err){ return next(err)};
    res.json(monsters);
  });
});

//UPDATE MONSTER INFORMATION
/*
router.put('/monsters', function() {

}
*/

//REMOVE MONSTERS
/*
router.delete('/monsters', function() {

}
*/

//- - - - - - - - - - - - - - - - - - - - - - - - - -

module.exports = router;
