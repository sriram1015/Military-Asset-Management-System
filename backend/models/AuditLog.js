// models/AuditLog.js
import mongoose from "mongoose";

const AuditLogSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    role: {
      type: String,
      enum: ["Admin", "BaseCommander", "LogisticsOfficer"],
      required: true,
    },
    action: {
      type: String,
      enum: ["Login", "Logout", "Purchase", "Transfer", "Assignment", "Expenditure", "RoleChange"],
      required: true,
    },
    details: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },
    status: {
      type: String,
      enum: ["Success", "Failure"],
      default: "Success",
    },
    ipAddress: { type: String },
    timestamp: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model("AuditLog", AuditLogSchema);
