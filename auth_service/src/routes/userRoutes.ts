import express from 'express';
import { register, login } from '../controllers/userController';
import { validateDto } from '../middleware/validateDto';
import { RegisterSchema, LoginSchema } from '../schemas/auth.schema';

const router = express.Router();

router.post('/register', validateDto(RegisterSchema), register);
router.post('/login', validateDto(LoginSchema), login);

export default router; 