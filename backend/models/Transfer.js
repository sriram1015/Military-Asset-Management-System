const mongoose = require('mongoose');
const schema = mongoose.Schema;

const transfer = new schema({
    asset:{ type:mongoose.Schema.Types.ObjectId,ref:'Asset',required:true},
    fromBase:{ type:schema.Types.ObjectId, ref:'Base',required:true},
    toBase:{type:schema.Types.ObjectId, ref:'Base',required:true},
    quantity:{ type:Number,required:true},
    tranferedBy:{ type:schema.Types.ObjectId,ref:'User',required:true},
    date:{type:Date,default:Date.now},

}, { timestamps: true } );

const Tran = mongoose.model('Transfer',transfer);
module.export=Tran;