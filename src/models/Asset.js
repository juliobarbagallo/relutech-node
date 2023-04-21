import {Schema, model} from 'mongoose'

const assetSchema = new Schema({
    brand: { type: String, required: true },
    model: { type: String, required: true },
    type: { type: String, enum: ['laptop', 'keyboard', 'mouse', 'headset', 'monitor'], required: true },
}, {
    timestamps: true,
    versionKey: false
})

export default model('Asset', assetSchema);