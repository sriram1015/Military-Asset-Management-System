const assignmentService = require('../Services/assignmentService');
const auditService = require('../Services/auditService');
exports.createAssingment = async(req,res)=>{
    const {asset,base,assignedTo,quantity,assignedby} = req.body;
    try {
        const assgin = await assignmentService.createAssignment(asset,base,assignedTo,quantity,assignedby);
        console.log('assginment sucessfully');
        const audit = await auditService.createAudit('Assignment','Success',assignedby,assgin);
        res.status(200).json({
            status:'ok',
            assgin,
            audit,
            message:'sucessfully assigned'
        });
    } catch (error) {
        console.error(error);
        const auditerror = await auditService.createAudit('Assignment','Failure',assignedby,assgin);
        res.status(400).json({
            status:'error',
            message:error
        })
    }
}

exports.getallassginment=async (req,res)=>{
    try {
        const getall = await assignmentService.getAssignment();
        res.status(200).json({
            status:'ok',
            getall,
            message:'all assignments'
        })
    } catch (error) {
        console.error(error)
        res.status(400).json({
            status:'error',
            message:error
        })
    }
}