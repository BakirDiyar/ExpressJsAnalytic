const mongoose = require("mongoose");
const env = require("../../environments/env");
mongoose.set("debug", true);

async function mongooseConnect() {
  try {
    await mongoose.connect(env.mongoose_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
      autoIndex: false,
      poolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
      family: 4,
    });
    console.log("conected db");
  } catch (error) {
    console.log("error ", error.message);
  }
}

module.exports = mongooseConnect;
