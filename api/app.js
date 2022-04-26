const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
const router = require("../routes/activity-routes")
const app = express();

require('dotenv').config();
const config = require('../config');
const PORT = config.port;

//Middlewear
app.use(express.json());
app.use(cors());
app.use("/activities", router); // localhost:5000/activities
if (config.isVercel) {
    app.use(async (req, res, next) => {
      await mongoose.connect(config.mongoUri, config.mongoOptions);
      return next();
    });
  }

module.exports = app;

//luY7ixwSoVK60Eyz