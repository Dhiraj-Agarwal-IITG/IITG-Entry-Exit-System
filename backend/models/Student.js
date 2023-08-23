const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},

	email: {
		type: String,
		required: true,
		unique: true,
	},

	rollNo: {
		type: String,
		required: true,
		unique:true,
	},

	department: {
		type: String,
		required: true,
		maxLength: 20,
	},
	
	contact :
	{
		type:Number,
		required:true,
		maxLength:10,
		minLength:10,
	},

	hostel: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("Student", studentSchema);

