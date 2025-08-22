const auditService = require('../Services/auditService');

exports.getall=async(req,res)=>{
    try {
        const get = await auditService.getallAudit();
        res.status(200).json({
            status:'ok',
            get,
            message:'all audits'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status:'error',
            message:error
        })
    }
}