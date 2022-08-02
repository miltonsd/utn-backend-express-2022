require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const { json } = require("body-parser");

// Requerir router
const router = require("./routes/index.routes");

// Set EJS (view engine)
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

// Settings
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extend: false }));
app.use(json());

// Rutas
app.use("/", router);

app.use((req, res, next) => {
  res.status(404).json({
    status: "404",
    descripcion: "Página no encontrada",
  });
});

module.exports = app;
