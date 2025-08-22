const Asset = require("../models/Asset");
const Purchase = require("../models/Purchase");
const Transfer = require("../models/Transfer");
const Assignment = require("../models/Assignment");
const Expenditure = require("../models/Expenditure");


    
    
exports.dashboard = async (req,res)=>{
    try {
        const assets = await Asset.find();
        const purchases = await Purchase.find();
        const transfers = await Transfer.find();
        const assignments = await Assignment.find();
        const expenditures = await Expenditure.find();
        res.json({
            totalAssets: assets.length,
            totalPurchases: purchases.length,
            totalTransfers: transfers.length,
            totalAssignments: assignments.length,
            
        });
    
    } catch (error) {
        console.error(error);
        res.status(500).json({ message:error });
    }
}