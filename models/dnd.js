var mongoose = require('mongoose');
var CharacterSchema = new mongoose.Schema({
    type: String,
    name: String,
    race: String,
    ddclass: String,
    level: Number,
    hp: Number,
});
var MonsterSchema = new mongoose.Schema({
    type: String,
    name: String,
    level: String,
    hp: Number,
});

mongoose.model('character', CharacterSchema);
mongoose.model('monster', MonsterSchema);
