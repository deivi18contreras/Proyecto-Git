import { response, request } from 'express';
import Usuario from '../models/Usuario.js';
import { enviarCorreoBienvenida } from '../helpers/email.js';

export const usuariosPost = async (req = request, res = response) => {
    const { nombre, documento, correo, password, rol } = req.body;

    // HUS-02-T2: Verificar si el correo o documento ya existen
    const existeEmail = await Usuario.findOne({ correo });
    if (existeEmail) {
        return res.status(400).json({
            msg: 'El correo ya está registrado'
        });
    }

    const existeDocumento = await Usuario.findOne({ documento });
    if (existeDocumento) {
        return res.status(400).json({
            msg: 'El documento de identidad ya está registrado.'
        });
    }

    // HUS-02-T3: Validación de contraseña fuerte (se hace en el modelo con match regex)
    // Pero si queremos ser explícitos aquí también (opcional)
    
    try {
        const usuario = new Usuario({ nombre, documento, correo, password, rol });

        // Guardar en DB (Mongoose validará y luego hasheará en pre('save'))
        await usuario.save();

        // HUS-02-T4: Simular envío de correo de bienvenida
        await enviarCorreoBienvenida(nombre, correo);

        res.status(201).json({
            msg: 'Usuario creado exitosamente. Se ha enviado un correo de bienvenida.',
            usuario
        });
    } catch (error) {
        // Capturar errores de validación de Mongoose
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(err => err.message);
            return res.status(400).json({
                msg: 'Error en la validación de datos',
                errors: messages
            });
        }
        console.log(error);
        res.status(500).json({
            msg: 'Error interno del servidor, hable con el administrador'
        });
    }
};