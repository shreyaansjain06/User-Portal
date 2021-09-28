const mongoose = require('mongoose');

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
const User = mongoose.model('User', userSchema);
module.exports = User;
