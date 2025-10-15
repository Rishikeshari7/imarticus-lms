const express= require("express")
const router = express.Router()


const {sendOtp,signup,login} = require("../controller/Auth")

router.post("/send-otp", sendOtp);
router.post("/signup", signup);
router.post("/login", login);

module.exports = router;