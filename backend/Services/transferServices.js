const transactionModel = require('../models/Transfer');
const assetModel = require('../models/Asset');
const baseModel = require('../models/base');
const userModel = require('../models/User');

class Transaction{
    async create(asset, fromBase, toBase, quantity,tranferedBy){
        const assetDoc = await assetModel.findOne({ name: asset });
        if (!assetDoc) throw new Error("Asset not found");

        const frombaseDoc = await baseModel.findOne({ name: fromBase });
        if (!frombaseDoc) throw new Error("From base not found");

        const toBaseDoc = await baseModel.findOne({ name: toBase });
        if (!toBaseDoc) throw new Error("To base not found");

        const userDoc = await userModel.findOne({ user_name: tranferedBy });
        if (!userDoc) throw new Error("User not found");

        const newTransaction = new transactionModel({
            asset: assetDoc._id, 
            fromBase:frombaseDoc._id, 
            toBase:toBaseDoc._id ,
            quantity,
            tranferedBy:userDoc._id
        })

        return newTransaction.save();
    }

    async getTrans(){
        const trans = await transactionModel.find().populate("asset fromBase toBase tranferedBy");
        return trans;
    }
}
module.exports = new Transaction();