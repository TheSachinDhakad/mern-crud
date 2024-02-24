const mongoose = require('mongoose')


const connectDb = async () => {
    try {

        await mongoose.connect("mongodb://localhost:27017/taskdb")
        console.log("db connection established")
    } catch (error) {
        console.log("error connecting to MongoDB: " + error)
    }

}

module.exports = connectDb;
