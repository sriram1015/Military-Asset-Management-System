const assginmentModel = require('../models/Assignment');
const assetModel = require('../models/Asset');
const baseModel = require('../models/base');
const userModel = require('../models/User');


class Assginment{
    async createAssignment(asset,base,assignedTo,quantity,assignedby){
        const user = await userModel.findOne({user_name:assignedTo});
        if(!user) throw new Error('user1 not found');
        const user2 = await userModel.findOne({user_name:assignedby});
        if(!user) throw new Error('user2 not found');
        const baseDoc = await baseModel.findOne({name:base});
        if(!base) throw new Error('base not found');
        const Asset = await assetModel.findOne({name:asset});
        if(!Asset) throw new Error('Asset not found');
        const newAssign = new assginmentModel({
            asset:Asset._id, 
            base:baseDoc._id, 
            assignedTo:user._id, 
            quantity,
            assignedby:user2._id
        })
        return newAssign.save();
    }
    async getAssignment(){
        return await assginmentModel.find().populate("asset base assignedTo assignedby");    }
}

module.exports = new Assginment();