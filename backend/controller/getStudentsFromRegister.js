const Register = require("../models/Register");
exports.getStudentsFromRegister = async (req, res) => {

	const roll = req.params.id;
	console.log("Printing Roll No in getallUser  :",roll);

	try {
		const studentData = await Register.find({rollNo:roll,inDate:""});
		console.log("Printing the User Data : ",studentData);
		res.json({ success: true, data: studentData });
	} catch (error) {
		console.log("input data is wrong")
		res.status(500).json({ success: false, error: error,message:"Process Failed"});
	}
};
