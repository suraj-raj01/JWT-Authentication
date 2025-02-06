const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyparser = require("body-parser");
require("dotenv").config();
const PORT = process.env.PORT || 8000;
const Database = process.env.DATABASE_URL;
const userRoutes = require("./routes/userRoutes")

mongoose.connect(Database).then(()=>{
    console.log("Database Connected Successfull !!");
})

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.use("/user",userRoutes);

app.listen(PORT,()=>{
    console.log(`Server run on port ${PORT}`);
});