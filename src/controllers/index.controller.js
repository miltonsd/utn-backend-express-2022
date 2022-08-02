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

const add = async (req, res) => {
  return res.render("../src/views/add");
};

module.exports = {
  index,
  add,
};
