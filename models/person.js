let mongoose = require('mongoose');
let process = require('process');



let personSchema = new mongoose.Schema({
    id:  {type:String, required:true},
    name: {type:String},
    birthdate: {type:String},
    age: {type:String},
    gender: {type:String},
    photo: {type:String},
    description: {type:String},
    ignoreList:{type:Array},
    wantedList:{type:Array}
},{timestamps: true});


// name
// age
// gender, 
// photo 
// description 




module.exports = mongoose.model('persons', personSchema);