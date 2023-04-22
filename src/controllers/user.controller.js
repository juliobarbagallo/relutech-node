import User from '../models/User.js';
import Asset from '../models/Asset.js';
import { ROLES } from '../models/Role.js';

export const getUsers = async (req, res) => {
    // const users = await User.find({ roles: { $in: [ROLES.developer] } }).populate('assets');
    const users = await User.find({})
    .populate('assets')
    .populate('licenses');
    return res.status(200).json(users)
}

export const getUserById = async (req, res) => {
    console.log("called get by id")
    console.log("ID: ", req.params.userId)
    const user = await User.findById(req.params.userId).populate('assets').populate('licenses');
    res.status(200).json(user)
}

export const deleteUserById = async (req, res) => {
    const {userId} = req.params;
    // const deletedUser = await User.findByIdAndDelete(userId)
    // const deletedUser = await User.findOneAndDelete({ _id: userId });

    // res.status(204).json()

    try {
        const user = await User.findById(userId);
    
        if (!user) {
          return res.status(404).json({ message: "User not found" });
        }
    
        await Asset.updateMany({ assignedTo: user._id }, { assignedTo: null });
        await License.deleteMany({ assignedTo: user._id }, { assignedTo: null });
    
        await User.deleteOne({ _id: user._id });
    
        res.status(204).json();
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
      }
}
