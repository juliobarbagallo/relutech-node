import User from '../models/User.js';
import Asset from '../models/Asset.js';
import { ROLES } from '../models/Role.js';

export const getUsers = async (req, res) => {
    // const users = await User.find({ roles: { $in: [ROLES.developer] } }).populate('assets');
    const users = await User.find({}).populate('assets');
    return res.status(200).json(users)
}

export const createUser = (req, res) => {
    // implement user creation
}
