import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { dbConnection } from './database/config.js';

import authRoutes from './routes/auth.js';
import usuarioRoutes from './routes/usuarios.js';

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;

        this.paths = {
            auth: '/api/auth',
            usuarios: '/api/usuarios'
        };

        // Conectar a base de datos
        this.conectarDB();

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }

    async conectarDB() {
        await dbConnection();
    }

    middlewares() {
        // CORS
        this.app.use(cors());

        // Lectura y parseo del body
        this.app.use(express.json());

        // Directorio Público (opcional)
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.paths.auth, authRoutes);
        this.app.use(this.paths.usuarios, usuarioRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto', this.port);
        });
    }
}

const server = new Server();
server.listen();
