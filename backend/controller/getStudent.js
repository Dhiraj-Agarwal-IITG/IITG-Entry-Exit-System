const Student = require("../models/Student");
exports.getStudent = async (req, res) => {

	const roll = req.params.id;
	console.log("Printing Roll No in getallUser  :",roll);

	try {
		const studentData = await Student.find({rollNo:roll});
		console.log("Printing the User Data : ",studentData);
		res.json({ success: true, data: studentData });
	} catch (error) {
		console.log("input data is wrong")
		res.status(500).json({ success: false, error: error,message:"Process Failed"});
	}
};
