// routes/protectedRoutes.js
import express from 'express';
import authenticateAndAuthorize from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/admin', authenticateAndAuthorize(['admin']), (req, res) => {
  console.log('Token válido. Usuario:', req.user);
  // Esta ruta solo será accesible si el token es válido
  res.json({ message: 'Acceso permitido para admin' });
});

router.get('/user', authenticateAndAuthorize(['user']), (req, res) => {
  console.log('Token válido. Usuario:', req.user);
  // Esta ruta solo será accesible si el token es válido
  res.json({ message: 'Acceso permitido para user' });
});

export default router;
