let personModel = require('../models/person');

let personController = {
  

    // id:  {type:String, required:true},
    // name: {type:String},
    // age: {type:String},
    // gender: {type:String},
    // photo: {type:String},
    // description: {type:String} 

    post: async (req,res) => {
        let data = req.body;
        // return res.json({status:"adssad",data});
        let {id,name,age,gender,photo,description} = req.body;
        return personModel.findOne({id}).then((person) => {
                return res.json({hello:"hworld"});
        });
        // if (person) {
        //     return res.json({error:"already existed",status:"failure"});
        // } else {
        //     person = new personModel({id,name,age,gender,photo,description});
        //     await person.save();
        //     return res.json({status:"completed",data:req.body});
        // }
        // new personModel()  
    },

    get: (req,res) => {
        return res.json({hello:"world"});
    }

};



module.exports = personController;