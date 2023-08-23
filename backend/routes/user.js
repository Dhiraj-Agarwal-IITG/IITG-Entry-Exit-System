const express = require("express");
const router = express.Router();

const { createEntry } = require("../controller/createEntry");
const { getStudent } = require("../controller/getStudent");
const { getAllStudents } = require("../controller/getAllStudent");
const {updateEntry} = require("../controller/updateEntry");
const { getOutStudents} = require("../controller/getOutStudents");
const {getOutStudentsbyDate} = require("../controller/getByDate");
const { getStudentsFromRegister } = require("../controller/getStudentsFromRegister");

router.post("/createEntry", createEntry);
router.get("/getStudent/:id", getStudent);
router.get("/getAllStudents",getAllStudents)
router.put("/updateEntry/:id",updateEntry);
router.get('/getOutStudents',getOutStudents);
router.get('/getOutStudentsbyDate/:id',getOutStudentsbyDate);
router.get('/getStudentsFromRegister/:id',getStudentsFromRegister);

module.exports = router;
