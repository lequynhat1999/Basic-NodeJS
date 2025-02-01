const mongoose = require('mongoose');

async function connectMongoDB(){
    try {
        await mongoose.connect('mongodb://localhost:27017/education_dev');
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

module.exports = { connectMongoDB };