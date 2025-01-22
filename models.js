const mongoose = require('mongoose');

const prediccionSchema = new mongoose.Schema({
    dia: {
        type: String,
        required: true,
    },
    clima: {
        type: String,
        required: true,
    },
    humedad: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model('Prediccion', prediccionSchema);
