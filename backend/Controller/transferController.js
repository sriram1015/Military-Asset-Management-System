const transcationService = require('../Services/transferServices');
const auditModel = require('../Services/auditService');
exports.createTransaction = async(req,res)=>{
    const {asset, fromBase, toBase, quantity,tranferedBy} = req.body;
    try {
        const trans = await transcationService.create(asset, fromBase, toBase, quantity,tranferedBy);
        console.log("transaction sucess");
        const audit = await auditModel.createAudit('Transfer','Success',tranferedBy,trans);
        console.log('sucess audit');
        res.status(200).json({
            status:'ok',
            trans,
            audit,
            message:'Transaction sucess'
        })
    } catch (error) {
        console.error(error);
        res.status(400).json({
            status:'error',
            message:err
        });
    }
}

exports.getTransaction = async(req,res)=>{
    try {
        const gettrans = await transcationService.getTrans();
        res.status(200).json({
            status:'ok',
            gettrans,
            message:'all Transaction'
        })
    } catch (error) {
        console.error(error);
        res.status(400).json({
            status:'error',
            message:error
        })
    }

}