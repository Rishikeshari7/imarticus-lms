const Razorpay = require("razorpay");
const dotenv = require("dotenv");
const crypto = require("crypto");
const User = require("../models/User");

dotenv.config();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY,
  key_secret: process.env.RAZORPAY_SECRET,
});

 const createOrder = async (req, res) => {
  try {
    const { amount, userId, courseId } = req.body;
    console.log( amount, userId, courseId);
    if (!amount || !userId || !courseId) {
      return res
        .status(400)
        .json({ success: false, message: "All fields required" });
    }

    const order = await razorpay.orders.create({
      amount: amount * 100,
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    }); 
    console.log("Order created:", order);

    res.status(200).json({ success: true, order });
  } catch (error) {
    console.error("Error in payment", error);
    res.status(500).json({ success: false, message: "Error in payment" });
  }
};

 const verifyPayment = async (req, res) => {
  try {
    console.log("=== VERIFY PAYMENT ===");
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, userId, courseId } = req.body;
    
    console.log("Request body:", req.body);
    

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature || !userId || !courseId) {
      return res.status(400).json({ 
        success: false, 
        message: "Missing required fields" 
      });
    }

    const generatedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_SECRET)
      .update(razorpay_order_id + "|" + razorpay_payment_id)
      .digest("hex");

    console.log("Generated signature:", generatedSignature);
    console.log("Received signature:", razorpay_signature);

    if (generatedSignature === razorpay_signature) {
      console.log("Signature verified, finding user with ID:", userId);
      
      const user = await User.findById(userId);
      
      if (!user) {
        console.log("User not found with ID:", userId);
        return res.status(404).json({ 
          success: false, 
          message: "User not found" 
        });
      }
      
      console.log("User found:", user.name || user.email);
      
     
      if (user.enrolledCourses && user.enrolledCourses.includes(courseId)) {
        return res.status(200).json({ 
          success: true, 
          message: "Already enrolled in this course" 
        });
      }
     
      if (!user.enrolledCourses) {
        user.enrolledCourses = [];
      }
      
      user.enrolledCourses.push(courseId);
      await user.save();
      
      console.log("User enrolled successfully");
      return res.status(200).json({ success: true, message: "Payment verified!" });
    } else {
      console.log("Signature verification failed");
      return res.status(400).json({ success: false, message: "Invalid signature!" });
    }
  } catch (error) {
    console.error("Error in payment:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
module.exports = { createOrder, verifyPayment };