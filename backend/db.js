const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://kaybgm25:Kaybgm2518@cluster0.0bdwwja.mongodb.net/';

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