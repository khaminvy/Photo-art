import mongoose, { Schema } from "mongoose"

const photoSchema = new Schema(
    {
        photoId: String,
        photoName: String,
        author: String,
        style: String,
        price: String,
        avaiableUnits: String
    },
    {
        timestamps: true
    }
)

const Photo = mongoose.models.Photo || mongoose.model("Photo", photoSchema)

export default Photo