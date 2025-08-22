// services/dashboardServices.js
const Asset = require("../models/Asset");
const Purchase = require("../models/Purchase");
const Transfer = require("../models/Transfer");
const Assignment = require("../models/Assignment");
const Expenditure = require("../models/Expenditure");

class Dashboard {
  async dashboard() {
    const assets = await Asset.find();
    const purchases = await Purchase.find();
    const transfers = await Transfer.find();
    const assignments = await Assignment.find();
    const expenditures = await Expenditure.find();

    // Aggregate values
    const openingBalance = assets.reduce((sum, a) => sum + (a.openingBalance || 0), 0);
    const closingBalance = assets.reduce((sum, a) => sum + (a.closingBalance || 0), 0);

    const totalPurchases = purchases.reduce((sum, p) => sum + (p.quantity || 0), 0);
    const totalTransfers = transfers.reduce((sum, t) => sum + (t.quantity || 0), 0);

    const assigned = assignments.reduce((sum, a) => sum + (a.quantity || 0), 0);
    const expended = expenditures.reduce((sum, e) => sum + (e.quantity || 0), 0);

    const netMovement = totalPurchases + totalTransfers - assigned - expended;

    return {
      openingBalance,
      closingBalance,
      netMovement,
      assigned,
      expended,
    };
  }
}

module.exports = new Dashboard();
