import express from 'express';
// Comentando la importación de Sequelize temporalmente
 import sequelize  from './config/sequelizeConfig.js';

 import authRoutes from './routes/authRoutes.js'
 import protectedRoutes  from './routes/protectedRoutes.js'
 import validatorRoutes  from './routes/validatorRoutes.js'

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const ManejadorError  = (err, req, res, next) => {

  console.error('Error en la base de datos:',err.message);
  res.status(500).send('Error en la base de datos. Que podria ser mmm');
}
// Comentando el uso de rutas temporalmente
// app.use('/users', userRoutes);
// app.use('/expedients', expedientRoutes);
app.get('/',async (req, res, next) => {

  try {
    await sequelize.authenticate();
    console.log('Base de Datos Conectada');

/*     const users = await User.findAll();
    console.log('Usuarios en la base de datos:', users); */

    res.send('¡El servidor está conectado!'); 
  } catch (error) {
    next(error);
  }
    
  });

  app.use(ManejadorError);

  app.use('/auth', authRoutes);
app.use('/protected', protectedRoutes);
app.use('/validator', validatorRoutes);

  app.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);
  });

// Comentando la sincronización de Sequelize temporalmente
// const sequelize = new Sequelize(/* configuración de Sequelize */);

