import express from 'express';
import authenticateAndAuthorize from '../middlewares/authMiddleware.js';
import * as expedientes from '../controllers/expedientesController.js';

const router = express.Router();

// Rutas protegidas para el primer validador
router.get('/ListarExpedientes', authenticateAndAuthorize(['2']),expedientes.getExpedienteData);
router.post('/Expedientes', authenticateAndAuthorize(['2']), expedientes.postExpedienteData);
router.put('/Expedientes', authenticateAndAuthorize(['2']), expedientes.putExpedienteData);
router.delete('/Expedientes', authenticateAndAuthorize(['2']), expedientes.deleteExpedienteData);

export default router;