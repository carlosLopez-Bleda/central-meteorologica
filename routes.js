const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Definir el esquema de predicción meteorológica
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

const Prediccion = mongoose.model('Prediccion', prediccionSchema);

// Obtener todas las predicciones
router.get('/predicciones', async (req, res) => {
    try {
        const predicciones = await Prediccion.find();
        res.json(predicciones);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener predicciones' });
    }
});

// Agregar una nueva predicción
router.post('/predicciones', async (req, res) => {
    try {
        const nuevaPrediccion = new Prediccion(req.body);
        await nuevaPrediccion.save();
        res.json({ message: 'Predicción guardada correctamente' });
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Error al guardar predicción' });
    }
});

module.exports = router;
