const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { dbConnection } = require("./src/database/config");

// Crear el servidor de express
const app = express();

// Base de datos
dbConnection();

// CORS
app.use(cors());

// Directorio Público
app.use(express.static("public"));

// Lectura y parseo del body
app.use(express.json());

// Rutas
app.use("/api/auth", require("./src/routes/auth"));
app.use("/api/events", require("./src/routes/events"));

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
