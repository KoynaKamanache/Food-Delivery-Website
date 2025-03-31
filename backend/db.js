require('dotenv').config(); // Load environment variables

const mongoose = require('mongoose');
const mongoURI = process.env.MONGO_URI   

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true   
        });
        console.log("Connected Successfully to MongoDB");
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1); // Exit the process if the connection fails
    }
};

module.exports = mongoDB;