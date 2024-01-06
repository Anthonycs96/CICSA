// models/user.js
import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../config/sequelizeConfig.js';

const User = sequelize.define('users', {
  // Otras columnas...
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},{
  timestamps: false,
});

export default User;