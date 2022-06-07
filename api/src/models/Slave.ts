import { Schema, model } from "mongoose";

const slaveSchema = new Schema ({
    userId: String,
    nacionality: String,
    birthName: String,
    name: String,
    miningLevel: {
        type: Number,
        default: 1
    },
    rancherLevel: {
        type: Number,
        default: 1
    },
    inUse: {
        type: Boolean,
        default: false
    }
})

slaveSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Slave = model('Slave', slaveSchema)

export default Slave