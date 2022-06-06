import { Schema, model } from "mongoose";

const userSchema = new Schema ({
    username: String,
    name: String,
    passwordHash: String,
    slaves: [String]
})

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
        delete returnedObject.passwordHash
    }
})

const User = model('User', userSchema)

export default User