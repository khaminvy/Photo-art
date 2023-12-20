import mongoose, { Schema } from "mongoose"

const contactSchema = new Schema(
    {
       firstName: String,
       lastName: String,
       email: String,
       message: String
    },
    {
        timestamps: true
    }
)

const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema)


export default Contact