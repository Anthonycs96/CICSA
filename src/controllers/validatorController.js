// controllers/validatorController.js
export const getValidatorData = (req, res) => {
  console.log('que paso')
    // Lógica para obtener datos del primer validador
    // ...
    res.json({ message: 'Obtención de datos del primer validador' });
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
  