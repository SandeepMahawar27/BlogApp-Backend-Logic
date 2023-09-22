//1
const express = require("express");
const app = express();

//2
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//3
app.use(express.json());

//4
const blogRoutes = require("./routes/blog");
//mount the todo API's routes
app.use("/api/s1", blogRoutes);

//5
const dbConnect = require("./config/database")
dbConnect(); 

//6
app.listen(PORT, () => {
      console.log("Server started Successfully..");
})

//7
app.get("/", (req,res) => {
    res.send("<h1>hiii sandeep, This is my home page</h1>")
})