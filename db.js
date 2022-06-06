const mongoose = require('mongoose')


const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)

        console.log("Mongodb connected");

    } catch (error) {
        console.log("Error with db");
        process.exit(1)
    }
}

module.exports = connectDb