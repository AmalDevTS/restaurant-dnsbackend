const mongoose = require('mongoose');

const connectionString = process.env.DATABASE;

mongoose.connect(connectionString)
.then(() => {
    console.log("MongoDB connected successfully");
})
.catch((err) => {
    console.log(`MongoDB connection failed: ${err.message}`);
});