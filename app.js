const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
const router = require("./routes/activity-routes")
const app = express();

//Middlewear
app.use(express.json());
app.use(cors());
app.use("/activities", router); // localhost:5000/books

mongoose
    .connect(
       "mongodb+srv://admin:luY7ixwSoVK60Eyz@cluster0.krego.mongodb.net/exerNotion?retryWrites=true&w=majority"
    )
    .then(() => console.log("connected to database"))
    .then(() =>{
        
        app.listen(5000);
    })
    .catch((err) => console.log(err));

//luY7ixwSoVK60Eyz