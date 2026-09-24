import mongoose from "mongoose";

const mongoURL = process.env.MONGODB_URL;

async function connectDB() {
    try {
        await mongoose.connect(mongoURL);
        console.log("DB Connected");
    } catch(err) {
        throw err;
    }
}

export default connectDB;