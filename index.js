//connect mongodb
require("dotenv").config()
const database = require("./src/database")
const PORT = process.env.PORT || 3000;
const express = require("express");
const app = express();
app.listen(PORT,()=>{
    console.log("server is running...");
})
app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({extended:true}))



const userRouter = require("./src/routes/user.route")
app.use("/user",userRouter);






