// models/user.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  casual: {
    type: String,
  },
  medical: {
    type: String,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
