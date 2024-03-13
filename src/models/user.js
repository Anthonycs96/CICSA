// models/user.js
import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../config/sequelizeConfig.js';

const User = sequelize.define('usuarios', {
  ID_Usuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  ID_Persona: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  Nombre_Usuario: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Contraseña: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Fecha_Inicio: {
    type: DataTypes.DATE, // Cambiado a DATE para almacenar fecha y hora
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), // Valor predeterminado para la fecha de inicio
  },
}, {
  timestamps: false,
});

export default User;
