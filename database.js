const mongoose = require('mongoose');

 const MONGO_URI ='mongodb+srv://clm0026:jacobito12@cluster0.vojyc.mongodb.net/central_meteorologica';


const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Conexión a la base de datos establecida');
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
        process.exit(1); // Detener el proceso en caso de error
    }
};

module.exports = connectDB;
