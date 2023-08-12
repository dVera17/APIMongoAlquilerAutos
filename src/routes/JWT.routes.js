import 'reflect-metadata';
import { Router } from "express";
import { generateToken, generateTokenGlobal } from '../middlewares/JWT/token.js';
const router = Router();

router.get('/:table', generateToken);
router.get('/generate/:global', generateTokenGlobal);

export default router;