const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070; 

app.use(cors());
app.use(bodyParser.json());

const url = process.env.MONGODB_URL;

mongoose.connect(url);/*,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopologyL: true,
    useFindAndModify: false 
});*/

const connection = mongoose.connection;
connection.once("open",() => {
    console.log("Mongo DB connection success !");
})

const studentRouter = require("./routes/students.js");

app.use("/student",studentRouter);

app.listen(PORT,() => {
   // console.log('server is up and running on port: ${PORT}');
   console.log(`Server running on port: ${PORT}`)
})