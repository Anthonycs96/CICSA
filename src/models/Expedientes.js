import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../config/sequelizeConfig.js';

const Expedientes = sequelize.define('expedientes', {
    ID_Expediente: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    Nombre_Expediente: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Descripcion_Expediente: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Fecha_Hora_Creacion: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    Fecha_Vencimiento: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    OC_Claro_Posicion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    OC_Ciscsa: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ID_Contrata: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Nun_Transaccion: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Porcentaje_Validado: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    ID_Usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Tipo_Expediente: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ID_Estado_Expediente: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Monto_Provision: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    // Otras columnas...
}, {
    timestamps: false,
});

export default Expedientes;
