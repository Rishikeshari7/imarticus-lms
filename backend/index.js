const express = require("express")
const dotenv = require("dotenv")
const connectDB = require("./config/db")
const userRoute = require("./routes/User")
const courseRoute = require("./routes/Course")
const paymentRoute = require("./routes/Payment")
const summeryRoute = require("./routes/Summery")
const cors = require("cors")

const app = express();
app.use(express.json());
dotenv.config();

app.use(cors({
    // origin: '*',
    origin: 'https://imarticus-lms-gvbu.vercel.app',
    credentials: true,
}))

app.use("/api/v1/user", userRoute);
app.use("/api/v1/course", courseRoute);
app.use("/api/v1/payment", paymentRoute);
app.use("/api/v1/summery", summeryRoute);

const PORT = process.env.PORT;
connectDB();
app.listen(PORT, ()=>{
    console.log(`Backend is Running ${PORT} `)
})
app.use('/',(req,res)=>{
    res.send('Backend is Live 🎉')
})