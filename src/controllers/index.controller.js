let usuario = [
  {
    id: 0,
    nombre: "pepe",
  },
  {
    id: 1,
    nombre: "juan",
  },
  {
    id: 2,
    nombre: "jony",
  },
];

const index = async (req, res) => {
  return res.render("../src/views/index", { usuario });
};

const show = async (req, res) => {
  const nombre = req.params.nombre;
  return res.render("../src/views/show", { nombre });
};

const edit = async (req, res) => {
  const nombre = req.params.nombre;
  return res.render("../src/views/edit", { nombre });
};

const create = async (req, res) => {
  return res.render("../src/views/create");
};

// API

const store = async (req, res) => {
  const { nombre, id } = req.body;
  if (nombre) {
    usuario.unshift({ id, nombre });
    return res.status(200).json({ id, nombre, msg: "Creado correctamente" });
  } else {
    return res.status(404).json({ msg: "No se recibieron los datos" });
  }
};

const update = async (req, res) => {
  const { nombre } = req.body;
  const id = req.params.id;
  if (id) {
    const actualizado = usuario.splice(id, 1, { id: id, nombre: nombre });
    return res.status(200).json({ actualizado, msg: "Editado correctamente" });
  } else {
    return res.status(404).json({ msg: "No se recibieron los datos" });
  }
};

const destroy = async (req, res) => {
  const id = req.params.id;
  const eliminado = usuario.splice(id, 1);
  return res.status(200).json({ eliminado, msg: "Eliminado correctamente" });
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
