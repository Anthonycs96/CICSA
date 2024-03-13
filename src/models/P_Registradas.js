import {  Sequelize, DataTypes } from 'sequelize';
import sequelize from '../config/sequelizeConfig.js';

const Personasregistradas = sequelize.define('personasregistradas',{

    ID_Persona:{
        type: DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
    },
    Nombre :{
        type:DataTypes.STRING,
        allowNull:false,
    },
    Apellido :{
        type:DataTypes.STRING,
        allowNull:false,
    },
    Correo :{
        type:DataTypes.STRING,
        allowNull:false,
    },
    Telefono :{
        type:DataTypes.STRING,
        allowNull:false,
    },
    Fecha_Registro: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    
},{
    timestamps: false, // Desactiva las columnas de fecha y hora automáticas
  });

export default Personasregistradas;