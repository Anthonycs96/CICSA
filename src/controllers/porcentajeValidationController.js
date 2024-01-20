import PorcentajeValidacion from '../models/PorcentajesValidacion.js';
// controllers/validatorController.js

export const getValidatorData = async (req, res) => {
  try {
    const datosValidador = await PorcentajeValidacion.findAll();

    res.json({ datosValidador });
  } catch (error) {
    console.error('Error al obtener datos del validador:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};
  
  export const postValidatorData = (req, res) => {
    // Lógica para manejar la petición POST del primer validador
    // ...
    res.json({ message: 'Manejo de datos del primer validador (POST)' });
  };
  
  export const putValidatorData = (req, res) => {
    // Lógica para manejar la petición PUT del primer validador
    // ...
    res.json({ message: 'Actualización de datos del primer validador' });
  };
  
  export const deleteValidatorData = (req, res) => {
    // Lógica para manejar la petición DELETE del primer validador
    // ...
    res.json({ message: 'Eliminación de datos del primer validador' });
  };
  