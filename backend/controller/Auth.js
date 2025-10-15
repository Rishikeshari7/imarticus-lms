const User = require("../models/User");
const Otp = require("../models/Opt");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const sendMail = require("../utils/sendMail");

const sendOtp = async (req, res) => {
  try {
    const { email } = req.body;
     const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }
    await Otp.deleteMany({ email });
    const otp = Math.floor(1000 + Math.random() * 9000);
    await Otp.create({ email, otp });
    await sendMail(email, otp);
    res.status(200).json({
      success: true,
      message: "Otp Sent Successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error Sending Otp",
    });
  }
};

const signup = async (req, res) => {
  try {
    const { name, email, number, password, otp } = req.body;
    console.log(name, email, number, password, otp);
    const isValidOtp = await Otp.findOne({ email, otp }).sort({ createdAt: -1 });
    console.log("isValidOtp", isValidOtp);
    if (!isValidOtp) {
      return res.status(400).json({
        success: false,
        message: "Invalid Otp or Email",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      number,
      password: hashedPassword,
    });

    await Otp.deleteMany({ email });
    await user.save();

    res.status(200).json({
      success: true,
      message: "User Created Successfully",
    });
  } catch (err) {
    console.error("Error in Signup", err);
    res.status(500).json({
      success: false,
      message: "Error In Signup",
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User Not Found",
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid Credentials",
        
      });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    console.log("Token", token);

    const userResponse = {
      _id: user._id,
      name: user.name,
      email: user.email,
      number: user.number,
      enrolledCourses: user.enrolledCourses || []
    };

    res.status(200).json({
      success: true,
      message: "Login Successful",
      token,
      user: userResponse
    });

  } catch (err) {
    console.error("Error in Login", err);
    res.status(500).json({
      success: false,
      message: "Error In Login",
    });
  }
};

module.exports = { sendOtp, signup, login };