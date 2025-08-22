const purchasedService = require('../Services/purchaseService');
const auditService = require('../Services/auditService');
exports.createPurchase = async (req,res)=>{
    const {asset,base,quantity,purchasedby} = req.body;
    try {
        const purchase = await purchasedService.create(asset,base,quantity,purchasedby);
        console.log('purchased sucessfully');
        const action='Purchase';
        const status='Success';
        const audit = await auditService.createAudit(action,status,purchasedby,purchase);
        console.log('Audit sucessfully');
        res.status(200).json({
            status:'ok',
            purchase,
            audit,
            message:'Sucessfully purchased'
        });

    } catch (err) {
        console.error(err)
        res.status(200).json({
            status:'err',
            message:err
        });
    }
}

exports.getPursh = async(req,res)=>{
    try {
        const pur = await purchasedService.getPurchases();
        res.status(200).json({
            status:'ok',
            pur,
            message:'all purchases'
        });
    } catch (error) {
        console.error(error);
        res.status(400).json({
            status:'error',
            message:error
        })
    }
}