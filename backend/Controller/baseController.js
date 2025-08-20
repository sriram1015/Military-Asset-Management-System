const baseService = require('../Services/baseService');

exports.baseRegister = async(req,res)=>{
    const {name,location} = req.body;
    try{
        const base = await baseService.registerBase(name,location);
        console.log("Base is registered Sucessfully");
        res.status(200).json({
            status:'ok',
            base,
            message:'Registered Successfully'
        });

    }
    catch(err){
        console.log(err);
        res.status(400).json({
            status:'error',
            message: err
        });
    }
}