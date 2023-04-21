import { Schema, model } from "mongoose";
import bcrypt from 'bcryptjs'


const userSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true,
        default: true
    },
    roles: [{ 
        type: Schema.Types.ObjectId,
        ref: 'Role'
    }],
    assets: [{ 
        type: Schema.Types.ObjectId,
        ref: 'Asset'
      }],
      licenses: [{
        type: Schema.Types.ObjectId,
        ref: 'License'
    }]
}, {
    timestamps: true,
    versionKey: false
});

userSchema.statics.encryptPassword = async (password) => {    
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    return hashedPassword
}

userSchema.statics.comparePassword = async (password, receivedPassword) => {
    console.log("comparePassword:", password, receivedPassword)
    return await bcrypt.compare(password, receivedPassword)
}

export default model('User', userSchema);