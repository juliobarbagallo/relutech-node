import Asset from '../models/Asset'
import User from '../models/User';


export const createAsset = async (req, res) => {
    const {brand, model, type, assignedTo} = req.body;
    const user = await User.findOne({ email: assignedTo });
    if (!user) {
        return res.status(400).json({ message: 'User not found.' });
    }
    const newAsset = new Asset({brand, model, type, assignedTo: user.email});
    const assetSaved = await newAsset.save()
    user.assets.push(newAsset);
    await user.save();
    res.status(201).json(assetSaved);
}

export const getAssets = async (req, res) => {
    const assets = await Asset.find();
    res.json(assets)
}

export const getAssetById = async (req, res) => {
    const asset = await Asset.findById(req.params.assetId)
    res.status(200).json(asset)
}

export const updateAssetById = async (req, res) => {
    // const updatedAsset = await Asset.findByIdAndUpdate(req.params.assetId, req.body, {
    //     new: true
    // })
    const updatedAsset = await Asset.findByIdAndUpdate(req.params.assetId, req.body, { new: true });

    const user = await User.findOneAndUpdate({ email: req.body.assignedTo }, { $push: { assets: updatedAsset._id } }, { new: true }).populate('assets').populate('licenses');
    await updatedAsset.save();
    await user.save();
    res.status(200).json(updatedAsset)
}

export const deleteAssetById = async (req, res) => {
    const {assetId} = req.params;
    const deletedAsset = await Asset.findByIdAndDelete(assetId)
    res.status(204).json()
}