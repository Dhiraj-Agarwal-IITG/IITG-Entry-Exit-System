const Register = require("../models/Register");

exports.getOutStudentsbyDate = async (req, res) => {
    try {
    const date = new Date(req.params.id); // Convert the date string to a Date object

    console.log("Printing the Date : ", date);

    const dateString = date.toDateString();

        console.log("Printing the Date : ", date);
        const studentData = await Register.find({
            outDate:dateString
        }).sort({ indexDate:-1 });

        console.log("Printing the User Out Data:", studentData);
        res.json({ success: true, data: studentData });
    } catch (error) {
        console.error("Error fetching user data:", error);
        res.status(500).json({ success: false, error: "Process Failed" });
    }
};