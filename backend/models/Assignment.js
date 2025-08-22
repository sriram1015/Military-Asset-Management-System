const mongoose = require('mongoose');
const schema = mongoose.Schema;

const assign = new schema({
    asset:{ type:schema.Types.ObjectId,ref:'assets',required:true},
    base:{ type:schema.Types.ObjectId , ref:'Base' , required:true},
    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // recommended: store user ObjectId,
    quantity:{ type:Number,required:true},
    assignedby:{ type:schema.Types.ObjectId,ref:'User',required:true},
    date:{ type:Date,default:Date.now},
}, { timestamps: true } );

const Assignment = mongoose.model('Assignment',assign);
module.exports = Assignment;