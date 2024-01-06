// middleware/authMiddleware.js
import jwt from 'jsonwebtoken';

const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Acceso no autorizado' });
  }

  jwt.verify(token, 'secreto', (err, user) => {
    try {
      if (err) {
        throw err;
      }
  
      req.user = user;
      next();
    } catch (error) {
      console.error('Error al verificar el token:', error);
      return res.status(403).json({ message: 'Token inválido' });
    }
  });
  
};

export default authenticateToken;
