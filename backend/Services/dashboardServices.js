const Asset = require("../models/Asset");
const Purchase = require("../models/Purchase");
const Transfer = require("../models/Transfer");
const Assignment = require("../models/Assignment");
const Expenditure = require("../models/Expenditure");

class Dashboard {
    async dashboard(){
    const assets = await Asset.find();
    const purchases = await Purchase.find();
    const transfers = await Transfer.find();
    const assignments = await Assignment.find();
    const expenditures = await Expenditure.find();
    return {assets,purchases,transfers,assignments,expenditures};
    }
}