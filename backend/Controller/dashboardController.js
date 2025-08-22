// controllers/dashboardController.js
const DashboardService = require("../Services/dashboardServices");

exports.getDashboard = async (req, res) => {
  try {
    const result = await DashboardService.dashboard();
    res.status(200).json(result);   // ✅ return plain object
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: error.message });
  }
};
