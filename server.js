const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./database');
const { Autor, Libro } = require('./models');
const path = require('path');
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// Sirve archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));
// Conectar a la base de datos
connectDB();

// Middleware para procesar JSON
app.use(express.json());



app.get('/', (req, res) => {
    res.send('API Meteorológica funcionando');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});