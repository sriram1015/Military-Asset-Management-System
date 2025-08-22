const mongoose = require("mongoose");

const ExpenditureSchema = new mongoose.Schema(
  {
    asset: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "assets", // Use singular, matching your Asset model
      required: true,
    },
    base: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Base",
      required: true,
    },
    quantity: { type: Number, required: true },
    reason: { type: String, required: true }, 
    expendedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Expenditure = mongoose.model('Expenditure', ExpenditureSchema);
module.exports = Expenditure;