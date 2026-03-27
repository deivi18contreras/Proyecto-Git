import { Router } from 'express';
import { usuariosPost } from '../controllers/usuarios.js';

const router = Router();

router.post('/', usuariosPost);

export default router;
