import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../config/sequelizeConfig.js';
import Validador from './validadorModel.js'; // Asegúrate de importar el modelo de Validadores

const PorcentajeValidacion = sequelize.define('porcentajesvalidacion', {
  PorcentajeID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  NumeroOC: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Contrata: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  PorcentajeFacturar: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: false,
  },
  Site: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  NombreProyecto: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  NumeroTransaccion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  StatusPAPValidacion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Comentario: {
    type: DataTypes.TEXT,
  },
  ValidadorID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Validador,
      key: 'ValidadorID',
    },
  },
}, {
  tableName: 'porcentajesvalidacion', // Cambia aquí
  timestamps: false,
});

export default PorcentajeValidacion;
