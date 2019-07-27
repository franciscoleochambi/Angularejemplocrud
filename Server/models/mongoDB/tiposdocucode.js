const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TiposdocuCodeSchema = new Schema({
    descr: String,
    code: String,
    tiposdocu_role: String,
    tiposdocu_duty: String,
    tiposdocu_descr: String,
    comments: String
    
});

module.exports = mongoose.model('TiposdocuCode', TiposdocuCodeSchema);


