const express= require("express")
const router = express.Router()
const {summarizeText} = require("../controller/Course")

router.post("/summarize-pdf", summarizeText);

module.exports = router;