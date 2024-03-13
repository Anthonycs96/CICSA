import P_Registradas from "../models/P_Registradas.js"

export const getP_RegistradasData = async (req, res) => {
    try {
      const p_Registradas = await P_Registradas.findAll();
      res.json(p_Registradas);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  };
  
  export const postP_RegistradaseData = (req, res) => {
    // Lógica para manejar la petición POST del primer validador
    // ...
    res.json({ message: 'Manejo de datos del primer validador (POST)' });
  };
  export const putP_RegistradasData = (req, res) => {
    // Lógica para manejar la petición POST del primer validador
    // ...
    res.json({ message: 'Manejo de datos del primer validador (POST)' });
  };
  export const deleteP_RegistradasData = (req, res) => {
    // Lógica para manejar la petición POST del primer validador
    // ...
    res.json({ message: 'Manejo de datos del primer validador (POST)' });
  };