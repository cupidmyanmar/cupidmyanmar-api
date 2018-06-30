
let mongoose = require('mongoose');
let process = require('process');

let dbuser = 'cupidMyanmar';
let dbpassword = 'Loremipsum91';
console.log(dbuser);
console.log(dbpassword);
mongoose.connect(`mongodb://${dbuser}:${dbpassword}@ds123981.mlab.com:23981/cupid`);

