const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = async () => {
    mongoose.set('strictQuery', false);
    const conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        
        // useCreateIndex: true
        // useFindAndModify: false
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`.blue.underline.bold);
}

module.exports = connectDB;