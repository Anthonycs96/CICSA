// models/user.js
import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../config/sequelizeConfig.js';

const User = sequelize.define('usuarios', {
  UsuarioID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  // Otras columnas...
  NombreCompleto: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Contraseña: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  RolID: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'user',
  },
},{
  timestamps: false,
});

export default User;
