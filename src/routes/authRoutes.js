import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';

const router = express.Router();

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Buscar el usuario en la base de datos
    const user = await User.findOne({ where: { username } });

    // Verificar si el usuario existe y la contraseña es correcta
    if (user) {
      // Comparar la contraseña proporcionada con la contraseña almacenada usando bcrypt
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (isPasswordValid) {
        // Generar un token de autenticación
        const token = jwt.sign({ userId: user.id }, 'secreto', { expiresIn: '1h' });
        
      console.log('Inicio de sesión exitoso')
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

// Ruta para registrar un nuevo usuario
router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Verificar si el usuario ya existe en la base de datos
    const existingUser = await User.findOne({ where: { username } });

    if (existingUser) {
      return res.status(400).json({ message: 'El usuario ya existe' });
    }

    // Si el usuario no existe, crear un nuevo usuario
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      password: hashedPassword,
    });

    res.status(201).json({ message: 'Usuario registrado exitosamente', user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
});

export default router;

