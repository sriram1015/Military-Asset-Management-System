const assetService = require('../Services/AssetService');
const Asset = require('../models/Asset');

exports.createAsset = async (req, res) => {
    const {name,type,base,openingBalance,closingBalance,totalAssigned,totalExpended} = req.body;
    try {
        const asset = await assetService.create(name,type,base,openingBalance,closingBalance,totalAssigned,totalExpended);
        console.log("Asset id sucessfully added");
        res.status(201).json({ status: 'ok', asset });
    } catch (err) {
        console.error(err);
        res.status(400).json({ status: 'error', message: err.message });
    }
};


exports.getAssets = async (req, res) => {
    try {
        const assets = await Asset.find().populate("base");
        
        res.status(200).json({ status: 'ok', assets });
    } catch (err) {
        res.status(400).json({ status: 'error', message: err.message });
    }
};


exports.getAssetById = async (req, res) => {
    try {
        const asset = await Asset.findById(req.params.id).populate('base');
        if (!asset) return res.status(404).json({ status: 'error', message: 'Asset not found' });
        res.status(200).json({ status: 'ok', asset });
    } catch (err) {
        res.status(400).json({ status: 'error', message: err.message });
    }
};


exports.updateAsset = async (req, res) => {
    try {
        const asset = await Asset.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!asset) return res.status(404).json({ status: 'error', message: 'Asset not found' });
        res.status(200).json({ status: 'ok', asset });
    } catch (err) {
        res.status(400).json({ status: 'error', message: err.message });
    }
};


exports.deleteAsset = async (req, res) => {
    try {
        const asset = await Asset.findByIdAndDelete(req.params.id);
        if (!asset) return res.status(404).json({ status: 'error', message: 'Asset not found' });
        res.status(200).json({ status: 'ok', message: 'Asset deleted' });
    } catch (err) {
        res.status(400).json({ status: 'error', message: err.message });
    }
};