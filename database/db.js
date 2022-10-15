import mongoose from "mongoose";



const connection = async (url) => {

    try {
        await mongoose.connect(url, { useNewUrlParser: true });
        console.log('database connected successfully');

    } catch (error) {
        console.log('connection failed while connecting to database', error);
    }
}

export default connection;