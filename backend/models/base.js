const mongoose = require('mongoose');
const schema = mongoose.Schema;

const baseSchema = new schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    commander: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true })
const Base = mongoose.model('Base', baseSchema);
module.exports = Base;