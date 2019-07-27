const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UmedidaCodeSchema = new Schema({
    descr: String,
    code: String,
   
    
});

module.exports = mongoose.model('UmedidaCode', UmedidaCodeSchema);



