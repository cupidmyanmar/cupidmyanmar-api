
let mongoose = require('mongoose');
let process = require('process');

let dbuser = process.env.dbuser;
let dbpassword = process.env.dbpassword;
console.log(dbuser);
console.log(dbpassword);
mongoose.connect(`mongodb://${dbuser}:${dbpassword}@ds123981.mlab.com:23981/cupid`,{ useMongoClient: true});

