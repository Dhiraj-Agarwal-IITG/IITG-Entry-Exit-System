const Register = require("../models/Register");
exports.getAllStudents = async (req, res) => {

	try {
		const studentData = await Register.find({}).sort({ indexDate: -1 });
		// console.log("Printing the User Data : ",userData);
		res.json({ success: true, data: studentData });
	}
	catch (error) {
		console.log("input data is wrong")
		res.status(500).json({ success: false, error: error,message:"Process Failed"});
	}
};
