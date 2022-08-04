const app = require("./server");
const http = require("http").createServer(app);
const mongoose = require("mongoose");
const url = "mongodb://0.0.0.0:27017/mongo_clase";

const PORT = process.env.PORT || 3000;

http.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
mongoose
  .connect(url, {})
  .then(() => console.log("Conectado a mongo"))
  .catch((e) => console.log("Error de conexion: " + e));
