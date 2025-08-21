const auditModel = require('../models/AuditLog');
const userModel = require('../models/User');
class Audit{
    async createAudit(action,status,user,details){
        const userDoc = await userModel.findOne({user_name:user});
        if(!userDoc) throw new Error("user not found");
        return new auditModel({
            userId:userDoc._id,
            role:userDoc.role,
            action,
            details,
            status
        }).save();

    }
}
module.exports = new Audit();