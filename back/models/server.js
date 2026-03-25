const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT; // Toma el puerto del .env [cite: 658, 659]

        // Middlewares
        this.middlewares();
        // Rutas de mi aplicación
        this.routes();
    }

    middlewares() {
        // CORS
        this.app.use(cors()); // [cite: 823]
        // Lectura y parseo del body a JSON
        this.app.use(express.json()); // [cite: 805]
    }

    routes() {
        // Ruta de prueba para tu avance
        this.app.get('/api/prueba', (req, res) => {
            res.status(200).json({
                msg: "¡El cascarón del backend funciona!" // [cite: 738, 739]
            });
        });
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`); // [cite: 663]
        });
    }
}

module.exports = Server; // [cite: 654]