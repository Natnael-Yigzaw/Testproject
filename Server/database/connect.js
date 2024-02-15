const mongoose = require("mongoose");

exports.connectDb = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
  } catch (error) {
    throw new Error(error.message);
  }
};
