// routes/protectedRoutes.js
import express from 'express';
import authenticateAndAuthorize from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/admin', authenticateAndAuthorize(['admin']), (req, res) => {
  console.log('Token válido. Usuario:', req.user);
  // Esta ruta solo será accesible si el token es válido
  res.json({ message: 'Acceso permitido para admin' });
});

router.get('/Validacion1', authenticateAndAuthorize(['user']), (req, res) => {
  console.log('Token válido. Usuario:', req.user);
  // Esta ruta solo será accesible si el token es válido
  res.json({ message: 'Acceso permitido para user' });
});

router.get('/Validacion2', authenticateAndAuthorize(['user']), (req, res) => {
  console.log('Token válido. Usuario:', req.user);
  // Esta ruta solo será accesible si el token es válido
  res.json({ message: 'Acceso permitido para user' });
});
router.get('/coordinador', authenticateAndAuthorize(['user']), (req, res) => {
  console.log('Token válido. Usuario:', req.user);
  // Esta ruta solo será accesible si el token es válido
  res.json({ message: 'Acceso permitido para user' });
});
router.get('/presupuesto', authenticateAndAuthorize(['user']), (req, res) => {
  console.log('Token válido. Usuario:', req.user);
  // Esta ruta solo será accesible si el token es válido
  res.json({ message: 'Acceso permitido para user' });
});
router.get('/almacen', authenticateAndAuthorize(['user']), (req, res) => {
  console.log('Token válido. Usuario:', req.user);
  // Esta ruta solo será accesible si el token es válido
  res.json({ message: 'Acceso permitido para user' });
});
router.get('/documentacion', authenticateAndAuthorize(['user']), (req, res) => {
  console.log('Token válido. Usuario:', req.user);
  // Esta ruta solo será accesible si el token es válido
  res.json({ message: 'Acceso permitido para user' });
});
router.get('/liquidacion', authenticateAndAuthorize(['user']), (req, res) => {
  console.log('Token válido. Usuario:', req.user);
  // Esta ruta solo será accesible si el token es válido
  res.json({ message: 'Acceso permitido para user' });
});
router.get('/superintendente', authenticateAndAuthorize(['user']), (req, res) => {
  console.log('Token válido. Usuario:', req.user);
  // Esta ruta solo será accesible si el token es válido
  res.json({ message: 'Acceso permitido para user' });
});

export default router;
