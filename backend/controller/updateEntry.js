const Register = require("../models/Register");
// const { toast } = require("express-toastify"); // Import express-toastify

exports.updateEntry = async (req, res) => {
    const roll = req.params.id;
    console.log("Printing Roll No in updateEntry : ", roll);

    try {
        const existingStudent = await Register.findOne({ rollNo: roll,inTime:""});
        console.log("Existing User : ",existingStudent);
        if(existingStudent)
        {
            const out = existingStudent.outTime;
            const currentTime = new Date();
            const dateString = currentTime.toDateString();
            console.log("Printing the string date is : ",dateString)
                // const formattedTime = currentTime.toISOString();
        
                const hours = currentTime.getHours();
                const minutes = currentTime.getMinutes();
                const seconds = currentTime.getSeconds();
            // const formattedTime = currentTime.toISOString();
    
            const studentData = await Register.findOneAndUpdate(
                { rollNo: roll, outTime:out},
                { inTime: `${hours}:${minutes}:${seconds}`, inDate:dateString },
                {
                    new: true, // Return the updated document
                }
            );
    
            if (!studentData) {
                return res.status(404).json({ success: false, message: "User not found" });
            }
    
            console.log("User Data Updated Successfully");
            res.json({ success: true, data: studentData});
        }
        else
        {
            return res.status(404).json({ success: false, message: "No Out Entry Found" });
        }
    } catch (error) {
        console.error("An error occurred:", error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
};

