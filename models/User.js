const mongoose = require('mongoose');
// // const Schema = mongoose.Schema;
const { Schema } = mongoose;

// this is very easy to edit
const userSchema = new Schema({
    googleId: String,
});

mongoose.model('users', userSchema);