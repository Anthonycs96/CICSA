// routes/validatorRoutes.js
import express from 'express';
import authenticateAndAuthorize from '../middlewares/authMiddleware.js';
import * as porcentajeValidationController from '../controllers/porcentajeValidationController.js';

const router = express.Router();

// Rutas protegidas para el primer validador
router.get('/PorcentajesValidacion', authenticateAndAuthorize(['validator']), porcentajeValidationController.getValidatorData);
router.post('/PorcentajesValidacion', authenticateAndAuthorize(['validator']), porcentajeValidationController.postValidatorData);
router.put('/PorcentajesValidacion', authenticateAndAuthorize(['validator']), porcentajeValidationController.putValidatorData);
router.delete('/PorcentajesValidacion', authenticateAndAuthorize(['validator']), porcentajeValidationController.deleteValidatorData);

export default router;
