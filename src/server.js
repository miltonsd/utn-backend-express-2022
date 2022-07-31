require("dotenv").config();
const express = require("express");
const cors = require("cors");

const router = require("./routes/index.routes");

const app = express();

app.set("port", process.env.PORT || 3000);

// Rutas
app.use("/", router);

// Settings
app.use(express.urlencoded({ extend: false }));
app.use(express.json());
app.use(cors());

module.exports = app;
