const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  picture: { type: String },
  sub: { type: String, required: true },
  updated_at: { type: Date, required: true }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
