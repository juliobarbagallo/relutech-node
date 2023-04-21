import Asset from '../models/Asset'

export const createAsset = async (req, res) => {
    const {brand, model, type} = req.body
    const newAsset = new Asset({brand, model, type});
    const assetSaved = await newAsset.save()
    res.status(201).json(assetSaved)
}

export const getAssets = (req, res) => {
    res.json("lala")
}

export const getAssetById = (req, res) => {
    
}

export const updateAssetById = (req, res) => {
    
}

export const deleteAssetById = (req, res) => {
    
}