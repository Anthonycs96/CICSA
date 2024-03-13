// sequelizeConfig.mjs
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('cicsav1db', 'root', '76653060a', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;
