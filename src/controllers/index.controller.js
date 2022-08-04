const mongoose = require("mongoose");

const personaSchema = mongoose.Schema({
  nombre: String,
  edad: Number,
  pais: String,
});

const PersonaModel = mongoose.model("personas", personaSchema);

const index = async (req, res) => {
  const personas = await PersonaModel.find();
  return res.render("../src/views/usuario/index", { personas });
};

const show = async (req, res) => {
  const id = req.params.id;
  const personas = await PersonaModel.find({ _id: id });
  return res.render("../src/views/usuario/show", { personas });
};

const edit = async (req, res) => {
  const id = req.params.id;
  const personas = await PersonaModel.find({ _id: id });
  return res.render("../src/views/usuario/edit", { personas });
};

const create = async (req, res) => {
  const persona = new PersonaModel({
    nombre: nombre,
    edad: edad,
    pais: pais,
  });
  return res.render("../src/views/usuario/create", { persona });
};

// API

const store = async (req, res) => {
  const { nombre, edad, pais } = req.body;
  const persona = new PersonaModel({
    nombre: nombre,
    edad: edad,
    pais: pais,
  });
  if (persona) {
    return res
      .status(200)
      .json({ status: 200, msg: "Creado correctamente", persona });
  } else {
    return res.status(404).json({ msg: "No se recibieron los datos" });
  }
};

const update = async (req, res) => {
  const { nombre, edad, pais } = req.body;
  const id = req.params.id;
  const persona = await PersonaModel.updateOne(
    { _id: id },
    {
      $set: { nombre: nombre, edad: edad, pais: pais },
    }
  );
  if (id) {
    return res
      .status(201)
      .json({ status: 201, persona, msg: "Editado correctamente" });
  } else {
    return res.status(404).json({ msg: "No se recibieron los datos" });
  }
};

const destroy = async (req, res) => {
  const id = req.params.id;
  const persona = PersonaModel.deleteOne({ _id: id });
  return res
    .status(200)
    .json({ status: 200, persona, msg: "Eliminado correctamente" });
};

module.exports = {
  index,
  create,
  show,
  edit,
  store,
  destroy,
  update,
};
