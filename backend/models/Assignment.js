const mongoose = require('mongoose');
const schema = mongoose.Schema;

const assign = new schema({
    asset:{ type:schema.Types.ObjectId,ref:'Asset',required:true},
    base:{ type:schema.Types.ObjectId , ref:'Base' , required:true},
    assginedTo:{ type:String,required:true},
    quantity:{ type:Number,required:true},
    assignedby:{ type:schema.Types.ObjectId,ref:'User',required:true},
    date:{ type:Date,default:Date.now},
}, { timestamps: true } );

const Assignment = mongoose.model('Assignment',assign);
module.export=Assignment;