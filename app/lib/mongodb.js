import mongoose from "mongoose"

const connecMongoDB = async () => {
    try {
        console.log(process.env.MONGODB_URI)
        mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to MogoDB.")
    } catch (errorr) {
        console.log(errorr)
    }
}

export default connecMongoDB