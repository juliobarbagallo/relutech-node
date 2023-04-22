import {Schema, model} from 'mongoose'

const licenseSchema = new Schema({
    software: { type: String, required: true },
    assignedTo: { type: String, required: true },
}, {
    timestamps: true,
    versionKey: false
})

export default model('License', licenseSchema);
