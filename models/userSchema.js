const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
// stucture of document 
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  work: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cpassword: {
    type: String,
    required: true,
  },
});

// it is basically collection in which there are documents of schema type
// always put first argument that is name of collection to be singular library converts it to plural


// add middleware pre function that run before save of user
userSchema.pre('save', async function (next) {
  if(this.isModified('password')){
    this.password=await bcrypt.hash(this.password,12);
    this.cpassword=await bcrypt.hash(this.cpassword,12);
    next(); 
  }
})
const User = mongoose.model('User', userSchema);
module.exports = User;
