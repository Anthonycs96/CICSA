// routes/validatorRoutes.js
import express from 'express';
import authenticateAndAuthorize from '../middlewares/authMiddleware.js';
import * as porcentajeValidationController from '../controllers/porcentajeValidationController.js';

const router = express.Router();

// Rutas protegidas para el primer validador
router.get('/PorcentajesValidacion', authenticateAndAuthorize(['2']), porcentajeValidationController.getValidatorData);
router.post('/PorcentajesValidacion', authenticateAndAuthorize(['Validador']), porcentajeValidationController.postValidatorData);
router.put('/PorcentajesValidacion', authenticateAndAuthorize(['Validador']), porcentajeValidationController.putValidatorData);
router.delete('/PorcentajesValidacion', authenticateAndAuthorize(['Validador']), porcentajeValidationController.deleteValidatorData);

export default router;
