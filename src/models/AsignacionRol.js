// models/user.js
import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../config/sequelizeConfig.js';
import User from './user.js'; // Importa el modelo User

// Define el modelo de Asignacion_Rol
const AsignacionRol = sequelize.define('asignacion_roles', {
    ID_Asignacion_Rol: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    ID_Usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ID_Rol: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    timestamps: false,
  });

  // Relaciona los modelos
User.hasMany(AsignacionRol, { foreignKey: 'ID_Usuario' });
AsignacionRol.belongsTo(User, { foreignKey: 'ID_Usuario' });

  export default AsignacionRol;