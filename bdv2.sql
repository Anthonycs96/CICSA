CREATE DATABASE cicsav1db;

USE cicsav1db;

-- Tabla de Contratas
CREATE TABLE Contratas (
    ID_Contrata INT PRIMARY KEY AUTO_INCREMENT,
    Nombre_Contrata VARCHAR(255),
    RUC_Contrata VARCHAR(20),
    Telefono_Contrata VARCHAR(20),
    Direccion_Contrata VARCHAR(255),
    Ciudad_Contrata VARCHAR(100),
    Estado_Contrata VARCHAR(100),
    Porcentaje_Facturar DECIMAL(5, 2),
    Avance_Validacion DECIMAL(5, 2)
);

-- Tabla de Roles
CREATE TABLE Roles (
    ID_Rol INT PRIMARY KEY AUTO_INCREMENT,
    Nombre_Rol VARCHAR(50),
    Descripcion_Rol TEXT
);

CREATE TABLE PersonasRegistradas (
    ID_Persona INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(100),
    Apellido VARCHAR(100),
    Correo VARCHAR(255),
    Telefono VARCHAR(20),
    Fecha_Registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- Tabla de Estado_Expediente
CREATE TABLE Estado_Expediente (
    ID_Estado_Expediente INT PRIMARY KEY AUTO_INCREMENT,
    Nombre_Estado VARCHAR(50),
    Descripcion_Estado TEXT
);

CREATE TABLE Usuarios (
    ID_Usuario INT PRIMARY KEY AUTO_INCREMENT,
    ID_Persona INT UNIQUE,
    Nombre_Usuario VARCHAR(50) UNIQUE,
    Contraseña VARCHAR(255),
    Fecha_Inicio DATE,
    FOREIGN KEY (ID_Persona) REFERENCES PersonasRegistradas(ID_Persona)
);

CREATE TABLE Asignacion_Roles (
    ID_Asignacion_Rol INT PRIMARY KEY AUTO_INCREMENT,
    ID_Usuario INT,
    ID_Rol INT,
    FOREIGN KEY (ID_Usuario) REFERENCES Usuarios(ID_Usuario),
    FOREIGN KEY (ID_Rol) REFERENCES Roles(ID_Rol)
);

CREATE TABLE Estado_Validacion (
    ID_Estado_Validacion INT PRIMARY KEY AUTO_INCREMENT,
    Nombre_Estado VARCHAR(50),
    Descripcion_Estado TEXT
);

-- Tabla de Áreas
CREATE TABLE Areas (
    ID_Area INT PRIMARY KEY AUTO_INCREMENT,
    Nombre_Area VARCHAR(255),
    Descripcion_Area TEXT
);



-- Tabla de Asignaciones
CREATE TABLE Asignaciones (
   ID_Asignacion INT PRIMARY KEY AUTO_INCREMENT,
   ID_Expediente INT,
   ID_Provision INT,
   ID_Area INT,
   ID_Estado_Expediente INT,
   FOREIGN KEY (ID_Expediente) REFERENCES Expedientes(ID_Expediente),
   FOREIGN KEY (ID_Provision) REFERENCES Provisiones(ID_Provision),
   FOREIGN KEY (ID_Area) REFERENCES Areas(ID_Area),
   FOREIGN KEY (ID_Estado_Expediente) REFERENCES Estado_Expediente(ID_Estado_Expediente)
);

-- Tabla de Expedientes
CREATE TABLE Expedientes (
    ID_Expediente INT PRIMARY KEY AUTO_INCREMENT,
    Nombre_Expediente VARCHAR(255),
    Descripcion_Expediente TEXT,
    Fecha_Hora_Creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    Fecha_Vencimiento DATE,
    OC_Claro_Posicion VARCHAR(255),
    OC_Ciscsa VARCHAR(255),
    ID_Contrata INT,
    Nun_Transaccion VARCHAR(255),
    Porcentaje_Validado VARCHAR(255),
    ID_Usuario INT,
    Tipo_Expediente VARCHAR(100),
    ID_Estado_Expediente INT,
    Monto_Provision DECIMAL(10, 2),
    FOREIGN KEY (ID_Usuario) REFERENCES Usuarios(ID_Usuario),
    FOREIGN KEY (ID_Estado_Expediente) REFERENCES Estado_Expediente(ID_Estado_Expediente),
    FOREIGN KEY (ID_Contrata) REFERENCES Contratas(ID_Contrata)
);

-- Tabla de Historial de Validacion
CREATE TABLE Historial_Validacion (
    ID_Historial_Validacion INT PRIMARY KEY AUTO_INCREMENT,
    ID_Expediente INT,
    ID_Usuario INT,
    ID_Estado_Validacion INT,
    Comentario TEXT,
    Fecha_Hora_Cambio TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (ID_Expediente) REFERENCES Expedientes(ID_Expediente),
    FOREIGN KEY (ID_Usuario) REFERENCES Usuarios(ID_Usuario),
    FOREIGN KEY (ID_Estado_Validacion) REFERENCES Estado_Validacion(ID_Estado_Validacion)
);

-- Tabla de Archivos Adjuntos
CREATE TABLE Archivos_Adjuntos (
    ID_Archivo INT PRIMARY KEY AUTO_INCREMENT,
    ID_Expediente INT,
    Nombre_Archivo VARCHAR(255),
    Ruta_Archivo VARCHAR(255),
    ID_Usuario_Validador INT,
    FOREIGN KEY (ID_Expediente) REFERENCES Expedientes(ID_Expediente),
    FOREIGN KEY (ID_Usuario_Validador) REFERENCES Usuarios(ID_Usuario)
);

-- Tabla de Historial de Provisiones
CREATE TABLE Historial_Provisiones (
    ID_Historial_Provision INT PRIMARY KEY AUTO_INCREMENT,
    ID_Provision INT,
    ID_Usuario INT,
    Monto_Provision DECIMAL(10, 2),
    Fecha_Registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    Accion VARCHAR(50),
    FOREIGN KEY (ID_Provision) REFERENCES Provisiones(ID_Provision),
    FOREIGN KEY (ID_Usuario) REFERENCES Usuarios(ID_Usuario)
);

-- Tabla de Provisiones
CREATE TABLE Provisiones (
    ID_Provision INT PRIMARY KEY AUTO_INCREMENT,
    ID_Expediente INT,
    FOREIGN KEY (ID_Expediente) REFERENCES Expedientes(ID_Expediente)
);

-- Tabla de Configuraciones del Sistema
CREATE TABLE Configuraciones_Sistema (
    ID_Configuracion INT PRIMARY KEY AUTO_INCREMENT,
    Nombre_Configuracion VARCHAR(255),
    Valor_Configuracion VARCHAR(255),
    ID_Usuario INT,
    FOREIGN KEY (ID_Usuario) REFERENCES Usuarios(ID_Usuario)
);
