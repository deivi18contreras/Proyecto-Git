import { response, request } from 'express';
import bcryptjs from 'bcryptjs';
import Usuario from '../models/Usuario.js';

export const login = async (req = request, res = response) => {
    const { correo, password } = req.body;

    try {
        const usuario = await Usuario.findOne({ correo });

        // C2: Si el usuario no existe, mostrar error genérico
        if (!usuario) {
            return res.status(400).json({
                msg: 'Usuario o contraseña incorrectos'
            });
        }

        // C1: Verificar si el usuario está activo (si aplica en el futuro)
        if (!usuario.estado) {
            return res.status(400).json({
                msg: 'Cuenta desactivada'
            });
        }

        // HUS-01-C4: Verificar si la cuenta está bloqueada por intentos fallidos
        const ahora = Date.now();
        if (usuario.lockUntil && usuario.lockUntil > ahora) {
            const minutosRestantes = Math.ceil((usuario.lockUntil - ahora) / (1000 * 60));
            return res.status(403).json({
                msg: `Cuenta bloqueada temporalmente. Intente de nuevo en ${minutosRestantes} minutos.`
            });
        }

        // Verificar la contraseña
        const validPassword = bcryptjs.compareSync(password, usuario.password);

        if (!validPassword) {
            // Incrementar intentos fallidos
            usuario.loginAttempts += 1;

            if (usuario.loginAttempts >= 3) {
                // Bloquear cuenta por 15 minutos (900,000 ms)
                usuario.lockUntil = ahora + 15 * 60 * 1000;
                usuario.loginAttempts = 0; // Reiniciar contador tras bloquear
                await usuario.save();
                return res.status(403).json({
                    msg: 'Has fallado 3 intentos. Cuenta bloqueada por 15 minutos.'
                });
            }

            await usuario.save();

            // C2: Si la contraseña es incorrecta, mostrar error genérico
            return res.status(400).json({
                msg: 'Usuario o contraseña incorrectos'
            });
        }

        // Login exitoso: reiniciar contador de intentos
        usuario.loginAttempts = 0;
        usuario.lockUntil = undefined;
        await usuario.save();

        // Respuesta exitosa (aquí iría el JWT en una fase posterior si se requiere)
        res.json({
            usuario,
            token: 'TOKEN_SIMULADO_JWT' // En el README no pidieron JWT pero es buena práctica
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error interno del servidor, hable con el administrador'
        });
    }
};
