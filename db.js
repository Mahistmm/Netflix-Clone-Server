const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGOOSE_URL);
    console.log(`Connected DB ${con.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
