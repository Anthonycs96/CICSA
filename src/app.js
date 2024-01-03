import express from 'express';
// Comentando la importación de Sequelize temporalmente
// import { Sequelize } from 'sequelize';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
// Comentando el uso de rutas temporalmente
// app.use('/users', userRoutes);
// app.use('/expedients', expedientRoutes);
app.get('/', (req, res) => {
    res.send('¡El servidor está conectado!');
  });

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal!');
});

// Comentando la sincronización de Sequelize temporalmente
// const sequelize = new Sequelize(/* configuración de Sequelize */);
// sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);
  });
// });
