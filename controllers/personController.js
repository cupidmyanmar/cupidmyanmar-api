let personModel = require('../models/person');

let personController = {
  

    // id:  {type:String, required:true},
    // name: {type:String},
    // age: {type:String},
    // gender: {type:String},
    // photo: {type:String},
    // description: {type:String} 

    // swipe: (req,res) => {
    //     let data =
    // }

    swipe: (req,res) => {

    },

    getList: (req,res) => {
        let interest = req.body.interest; 

    },

    post: async (req,res) => {
        let data = req.body;
        // return res.json({status:"adssad",data});
        let {id,name,birthdate,gender,photo,description} = req.body;
        let birthyear = birthdate.split('/')[2];
        let age =  2018 - birthyear; 
        try {
            let person =  new personModel({id,name,age,gender,photo,description});
            await person.save();
            return res.json({status:"completed"});
        } catch(error) {
            console.log(error);
            return res.json({message:error.message});
        }
        // return.save().then((data) => {
           
        // }).catch((error) => {
        //     console.log(error.message);
        //     return res.json({message:error.message});
        // });
     
        // new personModel()  
    },

    get: (req,res) => {
        return res.json({hello:"world"});
    }

};



module.exports = personController;