import express from 'express';
import authenticateAndAuthorize from '../middlewares/authMiddleware.js';
import * as p_Registradas from '../controllers/P_RegistradasController.js';

const router = express.Router();

// Rutas protegidas para el primer validador
router.get('/Listarp_Registradas', authenticateAndAuthorize(['2']),p_Registradas.getP_RegistradasData);
router.post('/p_Registradas', authenticateAndAuthorize(['2']), p_Registradas.postP_RegistradaseData);
router.put('/p_Registradas', authenticateAndAuthorize(['2']), p_Registradas.putP_RegistradasData);
router.delete('/p_Registradas', authenticateAndAuthorize(['2']), p_Registradas.deleteP_RegistradasData);

export default router;