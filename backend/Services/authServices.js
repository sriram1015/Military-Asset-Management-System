const userModel = require('../models/User');
const baseModel = require('../models/base');
const bcrypt = require('bcrypt');

class AuthServices{
    async register(user_name,email,password,role,base){
        const salt = await bcrypt.genSalt(10);
        const hashedpass = await bcrypt.hash(password,salt);
        const baseDoc = await baseModel.findOne({name : base});
        if(!baseDoc){
          throw new Error("Base not Found");
        }
        const newUser = new userModel({
            user_name,
            email,
            password: hashedpass,
            role,
            base:baseDoc._id,
        });
        const saveuser = await newUser.save();
        return saveuser;
    }
    async login(user_name,password){
      const user = await userModel.findOne({user_name});  
      if(!user){
        throw new Error("User Not Found");
      }
      const isMatch = await bcrypt.compare(password,user.password);
      if(!isMatch){
        throw new Error("Invalid Password");
        console.log("Invalid Credentials");
      }
      return user;
    }
}

module.exports=new AuthServices();