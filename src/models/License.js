import {Schema, model} from 'mongoose'

const licenseSchema = new Schema({
    id: { type: String, required: true },
    software: { type: String, required: true },
    assignedTo: { type: Schema.Types.ObjectId, ref: 'User' }
}, {
    timestamps: true,
    versionKey: false
})

export default model('License', licenseSchema);
