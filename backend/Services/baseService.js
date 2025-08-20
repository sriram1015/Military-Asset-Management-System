const baseModel = require('../models/base');

class Base{
    async registerBase(name,location){
        const newBase = new baseModel({
            name,
            location
        });
        const saveBase = newBase.save();
        return saveBase;
    }
}
module.exports = new Base();