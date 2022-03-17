const mongoose = require("mongoose");
require("dotenv").config();
const connectMongoose = async () => {
  try {
    await mongoose.connect(process.env.URI);
    console.log("server online");
  } catch (error) {
    console.log("server not online");
  }
};
module.exports = connectMongoose;
