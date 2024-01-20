import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';
import passwordValidator from 'password-validator';

const router = express.Router();

router.post('/login', async (req, res) => {
  const { NombreCompleto, Contraseña } = req.body;

  try {
    // Buscar el usuario en la base de datos
    const user = await User.findOne({ where: { NombreCompleto } });

    // Verificar si el usuario existe y la contraseña es correcta
    if (user) {
      // Comparar la contraseña proporcionada con la contraseña almacenada usando bcrypt
      const isPasswordValid = await bcrypt.compare(Contraseña, user.Contraseña);

      if (isPasswordValid) {
        // Generar un token de autenticación
        const token = jwt.sign({ userId: user.id, role: user.RolID }, 'secreto', { expiresIn: '1h' });
        console.log('Inicio de sesión exitoso');
        res.json({ message: 'Inicio de sesión exitoso', token });
      } else {
        res.status(401).json({ message: 'Credenciales inválidas' });
      }
    } else {
      res.status(401).json({ message: 'Credenciales inválidas' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
});

// Crear un validador de contraseñas
const passwordSchema = new passwordValidator();
passwordSchema
  .is().min(8)  // Mínimo 8 caracteres de longitud
  .has().uppercase()  // Al menos una letra mayúscula
  .has().lowercase()  // Al menos una letra minúscula
  .has().digits(1)     // Al menos un dígito
  .has().not().spaces();  // No permite espacios en blanco

// Ruta para registrar un nuevo usuario
router.post('/register', async (req, res) => {
  const { NombreCompleto, Contraseña, RolID } = req.body;
  //console.log(req.body);


  // Validar la contraseña usando el esquema definido
  if (!passwordSchema.validate(Contraseña)) {
    return res.status(400).json({ message: 'La contraseña no cumple con los requisitos de seguridad.' });
  }

  try {
    // Verificar si el usuario ya existe en la base de datos
    const existingUser = await User.findOne({ where: { NombreCompleto } });

    if (existingUser) {
      return res.status(400).json({ message: 'El usuario ya existe' });
    }

    // Si el usuario no existe, crear un nuevo usuario
    const hashedPassword = await bcrypt.hash(Contraseña, 10);

    const newUser = await User.create({
      NombreCompleto,
      Contraseña: hashedPassword,
      RolID: RolID || '0',  // Utiliza el valor proporcionado o '0' si no se proporciona
    });

    res.status(201).json({ message: 'Usuario registrado exitosamente', user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
});

export default router;