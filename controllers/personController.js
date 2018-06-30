let personModel = require('../models/person');

let personController = {
  

    // id:  {type:String, required:true},
    // name: {type:String},
    // age: {type:String},
    // gender: {type:String},
    // photo: {type:String},
    // description: {type:String} 

    post: (req,res) => {
        let data = req.body;
        // return res.json({status:"adssad",data});
        let {id,name,age,gender,photo,description} = req.body;
        return personModel.findOne({id}).then((person) => {
                return new personModel({id,name,age,gender,photo,description}).save();
        }).then((data) => {
            return res.json({status:"completed"});
        }).catch((error) => {
            console.log(error.message);
            return res.json({message:error.message});
        });
     
        // new personModel()  
    },

    get: (req,res) => {
        return res.json({hello:"world"});
    }

};



module.exports = personController;