import { Router } from 'express';
import { login, recuperarPassword } from '../controllers/auth.js';

const router = Router();

router.post('/login', login);

// [HUS-01-T2] C3: Ruta para recuperación de contraseña
router.post('/recuperar', recuperarPassword);

export default router;
