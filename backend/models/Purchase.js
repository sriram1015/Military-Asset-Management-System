const mongoose = require('mongoose');
const schema = mongoose.Schema;
const purchase = new schema({
    asset: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Asset',
        required: true
    },
    base: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Base',
        required: true
    },
    quantity: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    purchaseby: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },


}, { timestamps: true });

const pur = mongoose.model('Purchase', purchase);
module.export = pur;