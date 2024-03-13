-- Insertar datos en la tabla Contratas
INSERT INTO Contratas (Nombre_Contrata, RUC_Contrata, Telefono_Contrata, Direccion_Contrata, Ciudad_Contrata, Estado_Contrata, Porcentaje_Facturar, Avance_Validacion) 
VALUES 
('Empresa1', '1234567890', '123456789', 'Dirección 1', 'Ciudad 1', 'Activo', 75.00, 50.00),
('Empresa2', '0987654321', '987654321', 'Dirección 2', 'Ciudad 2', 'Activo', 80.00, 60.00),
('Empresa3', '1357902468', '246813579', 'Dirección 3', 'Ciudad 3', 'Inactivo', 90.00, 70.00),
('Empresa4', '2468013579', '135792468', 'Dirección 4', 'Ciudad 4', 'Activo', 70.00, 40.00);

-- Insertar datos en la tabla Roles
INSERT INTO Roles (Nombre_Rol, Descripcion_Rol) 
VALUES 
('Administrador', 'Rol con acceso total al sistema'),
('Supervisor', 'Rol con permisos de supervisión'),
('Analista', 'Rol con funciones de análisis'),
('Usuario', 'Rol básico con permisos limitados');

-- Insertar datos en la tabla PersonasRegistradas
INSERT INTO PersonasRegistradas (Nombre, Apellido, Correo, Telefono) 
VALUES 
('Juan', 'Perez', 'juan@example.com', '1234567890'),
('Maria', 'Gomez', 'maria@example.com', '9876543210'),
('Pedro', 'Rodriguez', 'pedro@example.com', '5555555555'),
('Ana', 'Martinez', 'ana@example.com', '7777777777');

-- Insertar datos en la tabla Estado_Expediente
INSERT INTO Estado_Expediente (Nombre_Estado, Descripcion_Estado) 
VALUES 
('Pendiente', 'Estado inicial del expediente'),
('En Proceso', 'Expediente en proceso de validación'),
('Validado', 'Expediente validado y listo para facturación'),
('Rechazado', 'Expediente rechazado debido a inconsistencias');

-- Insertar datos en la tabla Usuarios
INSERT INTO Usuarios (ID_Persona, Nombre_Usuario, Contraseña, Fecha_Inicio) 
VALUES 
(1, 'usuario1', 'password1', '2024-01-01'),
(2, 'usuario2', 'password2', '2024-01-15'),
(3, 'usuario3', 'password3', '2024-02-01'),
(4, 'usuario4', 'password4', '2024-02-15');

-- Insertar datos en la tabla Asignacion_Roles
INSERT INTO Asignacion_Roles (ID_Usuario, ID_Rol) 
VALUES 
(1, 1),
(2, 2),
(3, 3),
(4, 4);

-- Insertar datos en la tabla Estado_Validacion
INSERT INTO Estado_Validacion (Nombre_Estado, Descripcion_Estado) 
VALUES 
('En Revisión', 'El expediente se encuentra en revisión'),
('Aprobado', 'El expediente ha sido aprobado'),
('Rechazado', 'El expediente ha sido rechazado');

-- Insertar datos en la tabla Áreas
INSERT INTO Areas (Nombre_Area, Descripcion_Area) 
VALUES 
('Área1', 'Descripción del Área 1'),
('Área2', 'Descripción del Área 2'),
('Área3', 'Descripción del Área 3'),
('Área4', 'Descripción del Área 4');

-- Insertar datos en la tabla Expedientes
INSERT INTO Expedientes (Nombre_Expediente, Descripcion_Expediente, Fecha_Vencimiento, OC_Claro_Posicion, OC_Ciscsa, ID_Contrata, Nun_Transaccion, Porcentaje_Validado, ID_Usuario, Tipo_Expediente, ID_Estado_Expediente, Monto_Provision) 
VALUES 
('Expediente1', 'Descripción del expediente 1', '2024-03-31', 'OC Claro Posicion 1', 'OC Ciscsa 1', 1, 'Transacción 1', '80%', 1, 'Tipo 1', 1, 1000.00),
('Expediente2', 'Descripción del expediente 2', '2024-03-31', 'OC Claro Posicion 2', 'OC Ciscsa 2', 2, 'Transacción 2', '85%', 2, 'Tipo 2', 2, 2000.00),
('Expediente3', 'Descripción del expediente 3', '2024-03-31', 'OC Claro Posicion 3', 'OC Ciscsa 3', 3, 'Transacción 3', '90%', 3, 'Tipo 3', 3, 3000.00),
('Expediente4', 'Descripción del expediente 4', '2024-03-31', 'OC Claro Posicion 4', 'OC Ciscsa 4', 4, 'Transacción 4', '95%', 4, 'Tipo 4', 4, 4000.00);

-- Insertar datos en la tabla Historial_Validacion
INSERT INTO Historial_Validacion (ID_Expediente, ID_Usuario, ID_Estado_Validacion, Comentario) 
VALUES 
(1, 1, 1, 'Comentario 1'),
(2, 2, 2, 'Comentario 2'),
(3, 3, 3, 'Comentario 3'),
(4, 4, 1, 'Comentario 4');

-- Insertar datos en la tabla Archivos_Adjuntos
INSERT INTO Archivos_Adjuntos (ID_Expediente, Nombre_Archivo, Ruta_Archivo, ID_Usuario_Validador) 
VALUES 
(1, 'Archivo1', '/ruta/archivo1', 1),
(2, 'Archivo2', '/ruta/archivo2', 2),
(3, 'Archivo3', '/ruta/archivo3', 3),
(4, 'Archivo4', '/ruta/archivo4', 4);

-- Insertar datos en la tabla Provisiones
INSERT INTO Provisiones (ID_Expediente) 
VALUES 
(1),
(2),
(3),
(4);

-- Insertar datos en la tabla Historial_Provisiones
INSERT INTO Historial_Provisiones (ID_Provision, ID_Usuario, Monto_Provision, Accion) 
VALUES 
(1, 1, 500.00, 'Creación de provisión'),
(2, 2, 600.00, 'Creación de provisión'),
(3, 3, 700.00, 'Creación de provisión'),
(4, 4, 800.00, 'Creación de provisión');

-- Insertar datos en la tabla Asignaciones
INSERT INTO Asignaciones (ID_Expediente, ID_Provision, ID_Area, ID_Estado_Expediente) 
VALUES 
(1, 1, 1, 1),
(2, 2, 2, 2),
(3, 3, 3, 3),
(4, 4, 4, 4);

-- Insertar datos en la tabla Configuraciones_Sistema
INSERT INTO Configuraciones_Sistema (Nombre_Configuracion, Valor_Configuracion, ID_Usuario) 
VALUES 
('Configuración1', 'Valor1', 1),
('Configuración2', 'Valor2', 2),
('Configuración3', 'Valor3', 3),
('Configuración4', 'Valor4', 4);
