// routes/validatorRoutes.js
import express from 'express';
import authenticateAndAuthorize from '../middlewares/authMiddleware.js';
import * as validatorController from '../controllers/validatorController.js';

const router = express.Router();

// Rutas protegidas para el primer validador
router.get('/data', authenticateAndAuthorize(['validator']), validatorController.getValidatorData);
router.post('/data', authenticateAndAuthorize(['validator']), validatorController.postValidatorData);
router.put('/data', authenticateAndAuthorize(['validator']), validatorController.putValidatorData);
router.delete('/data', authenticateAndAuthorize(['validator']), validatorController.deleteValidatorData);

export default router;
