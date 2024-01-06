// sequelizeConfig.mjs
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('LIQUIDACIONESDB', 'root', '76653060a', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;
