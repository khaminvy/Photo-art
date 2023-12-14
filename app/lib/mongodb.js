import mongoose from "mongoose"

const connecMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        //console.log("Connected to MogoDB.")
    } catch (error) {
        console.log(error)
    }
}

export default connecMongoDB