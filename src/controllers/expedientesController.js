import Expedientes from "../models/Expedientes.js";



  export const getExpedienteData = async (req, res) => {
    try {
      const expedientes = await Expedientes.findAll();
      res.json(expedientes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  };
  
  export const postExpedienteData = (req, res) => {
    // Lógica para manejar la petición POST del primer validador
    // ...
    res.json({ message: 'Manejo de datos del primer validador (POST)' });
  };
  export const putExpedienteData = (req, res) => {
    // Lógica para manejar la petición POST del primer validador
    // ...
    res.json({ message: 'Manejo de datos del primer validador (POST)' });
  };
  export const deleteExpedienteData = (req, res) => {
    // Lógica para manejar la petición POST del primer validador
    // ...
    res.json({ message: 'Manejo de datos del primer validador (POST)' });
  };
