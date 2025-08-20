const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
    user_name: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["Admin", "BaseCommander", "LogisticsOfficer"],
        default: 'Admin',
        required: true,
    },
    base: {
        type: String,
        ref: "Base",
    },
}, { timestamps: true });
const User = mongoose.model('User', userSchema);
module.exports = User;