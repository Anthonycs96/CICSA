  // middleware/authMiddleware.js
  import jwt from 'jsonwebtoken';

  const authenticateAndAuthorize = (roles) => {
    return (req, res, next) => {
      const token = req.header('Authorization');

      if (!token) {
        console.log('Token no proporcionado');
        return res.status(401).json({ message: 'Acceso no autorizado1' });
      }

      jwt.verify(token, 'secreto', (err, user) => {
        try {
          if (err) {
            throw err;
          }

          req.user = user;

          // Verificar roles
          const userRoles = req.user.role;
          if (roles && roles.length > 0 && !roles.includes(userRoles)) {
            return res.status(403).json({ message: 'Acceso no autorizado2' });
          }

          next();
        } catch (error) {
          console.error('Error al verificar el token:', error);
          return res.status(403).json({ message: 'Token inválido' });
        }
      });
    };
  };

  export default authenticateAndAuthorize;
