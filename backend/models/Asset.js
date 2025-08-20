const mongoose = require("mongoose");
const schema = mongoose.Schema;
const Asset = new schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    base: {
        type: String,
        ref: 'Base',
        required: true,
    },
    openingBalance: { type: Number, default: 0 },
    closingBalance: { type: Number, default: 0 },
    totalAssigned: { type: Number, default: 0 },
    totalExpended: { type: Number, default: 0 },
}, { timestamps: true });
const asset = mongoose.model('assets', Asset);
module.exports = asset;