const express= require("express")
const router = express.Router()


const {createCourse,getCourseById} = require("../controller/Course")

router.post("/create-course", createCourse);
router.get("/:id", getCourseById);

module.exports = router;