// models/validadorModel.js
import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../config/sequelizeConfig.js';

const Validador = sequelize.define('Validador', {
  ValidadorID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  NombreCompleto: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Otras columnas...
}, {
  timestamps: false,
});

export default Validador;
