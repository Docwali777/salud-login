const mongoose = require('mongoose');
const {Schema} = mongoose
var passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = Schema({
  Username: String,
  Email: String,
  Password: String,
  ConfirmPassword: String,
  Date: String
})
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('UserInfo', UserSchema)
