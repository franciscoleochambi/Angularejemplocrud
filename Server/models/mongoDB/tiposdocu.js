const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TiposdocuSchema = new Schema({
    descripcion: String,
    codigo: String
    
});

module.exports = mongoose.model('Tiposdocu', TiposdocuSchema);