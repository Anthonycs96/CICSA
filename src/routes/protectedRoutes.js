// routes/protectedRoutes.js
import express from 'express';
import authenticateToken from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/datos-protegidos', authenticateToken, (req, res) => {
  console.log('Token válido. Usuario:', req.user);
  // Esta ruta solo será accesible si el token es válido
  res.json({ message: 'Datos protegidos' });
});

export default router;
