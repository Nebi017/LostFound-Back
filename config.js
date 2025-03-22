const mongoose = require("mongoose");

async function connectDatabase() {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
    console.log("Connected Succesfully");
  } catch (error) {
    console.error(error.message);
  }
}

module.exports = connectDatabase;
