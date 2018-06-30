let personModel = require('../models/person');

let personController = {
  

    post: (req,res) => {

    },

    get: (req,res) => {
        return res.json({hello:"world"});
    }

};



module.exports = personController;