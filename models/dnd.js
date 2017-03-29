var mongoose = require('mongoose);
var CharacterSchema = new mongoose.schema({
    name: string,
    race: string,
    ddclass: string,
    hp: number,
});

mongoose.model('character', CharacterSchema);
