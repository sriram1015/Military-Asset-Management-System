const UserAuth = require('../Services/authServices');
const AuditService = require('../Services/auditService');
exports.registerUser = async(req,res)=>{
    const {user_name,email,password,role,base}= req.body;
    try{
        const user = await UserAuth.register(user_name,email,password,role,base);
        console.log("Registered Suscessfully");
        
        res.status(200).json({
            status:'ok',
            user,
            message:'user registered sucessfully'
        });
    }
    catch(err){
        console.error(err);
        res.status(400).json({
            status:'error',
            message:err,
        })
    }
}

exports.loginUser = async(req,res)=>{
    const {user_name,password}=req.body;
    try{
        const user = await UserAuth.login(user_name,password);
        const audit = await AuditService.createAudit('Login','Success',user_name,{user_name,password});
        console.log("Logging Sucessfully");
        res.status(200).json({
            status:'Ok',
            user,
            audit,
            message:'user logging sucessfully'
        });
    }
    catch(err){
        const auditerr = await AuditService.createAudit('Login','Failure',user_name,{user_name,password});
        console.error(err);
        res.status(400).json({
            status:'error',
            auditerr,
            message:err
        });
    }
}
