const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TiposdocuCodeSchema = new Schema({
    descr: String,
    code: String,
    job_role: String,
    job_duty: String,
    job_descr: String,
    comments: String
    
});

module.exports = mongoose.model('TiposdocuCode', TiposdocuCodeSchema);


