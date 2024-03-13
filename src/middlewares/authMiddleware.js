  // middleware/authMiddleware.js
  import jwt from 'jsonwebtoken';

  const authenticateAndAuthorize = (roles) => {
    return (req, res, next) => {
      const token = req.header('Authorization');
      
      //console.log(req)

      console.log(token)

      if (!token) {
        console.log('Token no proporcionado');
        return res.status(401).json({ message: 'Acceso no autorizado1' });
      }

      jwt.verify(token, 'secreto', (err, decodedToken) => {
        try {
          if (err) {
            throw err;
          }

          req.user = decodedToken;
          console.log('esto buscas', decodedToken)

          // Verificar roles
          //const userRoles = req.user.role;
          const userRoles = decodedToken.rolesIds ? decodedToken.rolesIds.toString() : null;


          if (!userRoles) {
              console.log('No se encontraron roles en el token');
              return res.status(403).json({ message: 'Acceso no autorizado' });
          }


          // Convertir el ID del rol a string para la comparación
    const userRoleIdString = userRoles.toString();
          console.log(userRoleIdString)
          console.log(userRoles)
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
