//Just like import statements
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creating Schema
const UserSchema = new Schema({
    name: String
});

//Creating model
//THis User represents entire collection of  data
const User = mongoose.model('user', UserSchema);

//export model
//THis provides the access to all the files inside application, so that they will get reference to this user.
module.exports  = User;