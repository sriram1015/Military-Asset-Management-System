const assetModel = require('../models/Asset');
const baseModel = require('../models/base');
class Asset{
    async create(name,type,base,openingBalance,closingBalance,totalAssigned,totalExpended){
        const baseDoc = await baseModel.findOne({name:base});
        if(!baseDoc) throw new Error('base not found');
        const newAsset = new assetModel({
            name,
            type,
            base:baseDoc._id,
            openingBalance,
            closingBalance,
            totalAssigned,
            totalExpended
        });

        return await newAsset.save();
    }
}

module.exports= new Asset();