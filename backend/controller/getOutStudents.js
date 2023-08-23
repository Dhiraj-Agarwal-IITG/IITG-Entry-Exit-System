const Register = require("../models/Register");
exports.getOutStudents = async (req, res) => {

	try {
		const studentData = await Register.find({inTime:""}).sort({indexDate:-1});
		console.log("Printing the User Out Data : ",studentData);
		res.json({ success: true, data: studentData });
	} catch (error) {
		console.log("input data is wrong")
		res.status(500).json({ success: false, error: error,message:"Process Failed"});
	}
};

