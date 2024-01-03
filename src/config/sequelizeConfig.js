// sequelizeConfig.mjs
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('nombre_de_la_base_de_datos', 'nombre_de_usuario', 'contraseña', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;
