const assignmentService = require('../Services/assignmentService');
const auditService = require('../Services/auditService');

exports.createAssignment = async (req, res) => {
  const { asset, base, assignedTo, quantity, assignedby } = req.body;
  try {
    const assign = await assignmentService.createAssignment(asset, base, assignedTo, quantity, assignedby);
    await auditService.createAudit('Assignment', 'Success', assignedby, assign);
    res.status(200).json(assign);
  } catch (error) {
    console.error(error);
    await auditService.createAudit('Assignment', 'Failure', assignedby, {});
    res.status(400).json({ message: error.message });
  }
};

exports.getAllAssignments = async (req, res) => {
  try {
    const assignments = await assignmentService.getAssignment();
    res.status(200).json(assignments); // ✅ return plain array
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
};
