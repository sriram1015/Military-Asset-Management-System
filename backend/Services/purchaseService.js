const purchaseModel = require('../models/Purchase');
const auditModel = require('../models/AuditLog');
const userModel = require('../models/User');
const baseModel = require('../models/base');
const assetModel = require('../models/Asset');

class Purchase{
    async create(asset,base,quantity,purchasedby){
        const user = await userModel.findOne({user_name:purchasedby});
        if(!user) throw new Error('user not found');
        const baseDoc = await baseModel.findOne({name:base});
        if(!base) throw new Error('base not found');
        const Asset = await assetModel.findOne({name:asset});
        if(!Asset) throw new Error('Asset not found');
        const newPurchase = new purchaseModel({
            asset: Asset._id,
            base: baseDoc._id,
            quantity,
            purchaseby: user._id, // <-- match schema
        });
        return newPurchase.save();
    }

    async getPurchases() {
  return await purchaseModel.find().populate("asset base purchaseby");
}

}

module.exports= new Purchase();