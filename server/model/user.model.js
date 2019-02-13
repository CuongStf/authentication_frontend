const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
	username: {
		require: true,
		type: String,
		unique: true
	},
	password: {
		require: true,
		type: String
	}
}, {
	versionKey: false
})


const userModel = mongoose.model('user', userSchema, 'user');

module.exports = userModel;