const express = require('express');
const router = express.Router();
const { createAsset, getAssets, getAssetById, updateAsset, deleteAsset } = require('../Controller/Asset');

router.post('/create', createAsset);
router.get('/all', getAssets);
router.get('/:id', getAssetById);
router.put('/:id', updateAsset);
router.delete('/:id', deleteAsset);

module.exports = router;