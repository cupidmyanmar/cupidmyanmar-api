let personModel = require('../models/person');
let completed = "completed";
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

    
    swipe: async (req,res) => {
        let {swipe,id,currentId} = req.body;
        let response = {};
        try {
            if (swipe == 'left') {
                // ignore
               response = await personModel.update({id:currentId},{$addToList:{ ignoreList: id}}).exec();
            } else {
               response = await personModel.update({id:currentId},{$addToList:{ wantedList : id}}).exec();
                // pending
            }
            return res.json({status:completed,data:response});
        } catch(error) {
            return res.json({status:"error",error:error.message});
        }
    },

    getAllList: async(req,res) => {
        try {
            let data = await personModel.find({}).lean();
            return res.json({status:completed,data});
        } catch(error) {
            return res.json({status:"error",data});
        }
       
    },

    getList: async (req,res) => {
        try {
            let {interest,currentId} = req.body;
            let {wantedList,ignoreList} = await personModel.findOne({id:currentId});
            let BigArray = [currentId,...wantedList,...ignoreList];
            let data = await personModel.find({gender:interest, id : {$nin : BigArray} }).lean();
            return res.json({status:completed,data});
        } catch(error) {
            return res.json({status:"error",error:error.message});
        }

        // gender,interest
        // not include in match list
        // 
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
            return res.json({status:completed});
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