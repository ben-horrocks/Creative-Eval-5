var mongoose = require('mongoose');
var CharacterSchema = new mongoose.Schema({
    name: String,
    race: String,
    ddclass: String,
    level: Number,
    hp: Number,
});
var MonsterSchema = new mongoose.Schema({
    name: String,
    level: String,
    hp: Number,
});

mongoose.model('character', CharacterSchema);
mongoose.model('monster', MonsterSchema);
