const index = async (req, res) => {
  let usuario = [
    {
      nombre: "pepe",
    },
    {
      nombre: "juan",
    },
    {
      nombre: "jony",
    },
  ];
  return res.render("../src/views/index", { usuario });
};

const edit = async (req, res) => {
  const nombre = req.params.nombre;
  return res.render("../src/views/edit", { nombre });
};

const create = async (req, res) => {
  return res.render("../src/views/create");
};

module.exports = {
  index,
  create,
  edit,
};
