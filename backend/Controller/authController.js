const UserAuth = require('../Services/authServices');

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
    const {email,password}=req.body;
    try{
        const user = await UserAuth.login(email,password);
        console.log("Logging Sucessfully");
        res.status(200).json({
            status:'Ok',
            user,
            message:'user logging sucessfully'
        });
    }
    catch(err){
        console.error(err);
        res.status(400).json({
            status:'error',
            message:err
        });
    }
}
