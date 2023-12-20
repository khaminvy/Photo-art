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

// const contactSchema = new Schema(
//     {
//        firstName: String,
//        lastName: String,
//        email: String,
//        message: String
//     },
//     {
//         timestamps: true
//     }
// )

//const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema)
const Photo = mongoose.models.Photo || mongoose.model("Photo", photoSchema)


export default Photo