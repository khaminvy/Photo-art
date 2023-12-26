import mongoose from "mongoose"

const connecMongoDB = async () => {
    try {

        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connect to MongoDB...")
    } catch (error) {
        console.log(error)
    }
}

export default connecMongoDB