require('dotenv').config(); // Load environment variables

const mongoose = require('mongoose');
const mongoURI = process.env.MONGO_URI;

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("✅ Connected Successfully to MongoDB");

        const db = mongoose.connection.db;

        // Fetch data from both collections
        const foodItems = await db.collection("food-items").find({}).toArray();
        const foodCategory = await db.collection("food-category").find({}).toArray();

        // Assign to global
        global.food_items = foodItems;
        global.food_category = foodCategory;

        console.log("✅ Data loaded: ", foodItems.length, "items and", foodCategory.length, "categories");

    } catch (error) {
        console.error("❌ MongoDB connection failed:", error);
        process.exit(1);
    }
};

module.exports = mongoDB;