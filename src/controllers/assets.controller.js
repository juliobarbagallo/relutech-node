import Asset from '../models/Asset'

export const createAsset = async (req, res) => {
    const {brand, model, type} = req.body
    const newAsset = new Asset({brand, model, type});
    const assetSaved = await newAsset.save()
    res.status(201).json(assetSaved)
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
    const updatedAsset = await Asset.findByIdAndUpdate(req.params.assetId, req.body, {
        new: true
    })
    res.status(200).json(updatedAsset)
}

export const deleteAssetById = async (req, res) => {
    const {assetId} = req.params;
    const deletedAsset = await Asset.findByIdAndDelete(assetId)
    res.status(204).json()
}