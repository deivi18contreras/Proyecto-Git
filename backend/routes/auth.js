import { Router } from 'express';
import { login, recuperarPassword } from '../controllers/auth.js';

const router = Router();

router.post('/login', login);
router.post('/recuperar', recuperarPassword);

export default router;
