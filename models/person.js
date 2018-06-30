let mongoose = require('mongoose');
let process = require('process');



let personSchema = new mongoose.Schema({
    id:  {type:String, required:true,unique:true},
    name: {type:String},
    age: {type:String},
    gender: {type:String},
    photo: {type:String},
    description: {type:String} 
},{timestamps: true});


// name
// age
// gender, 
// photo 
// description 




module.exports = mongoose.model('persons', personSchema);