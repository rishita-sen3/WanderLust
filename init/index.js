const mongoose = require("mongoose");
const initData = require("./data.js"); // stays like this if data.js is inside init/
const Listing = require("../models/listings.js"); // go up one level to models/

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("✅ Connected to DB");
    return initDB();
  })
  .catch((err) => {
    console.error("❌ DB Connection Error:", err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  try {
    //await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("✅ Data was initialized");
    mongoose.connection.close();
  } catch (err) {
    console.error("❌ Error initializing data:", err);
  }
};
