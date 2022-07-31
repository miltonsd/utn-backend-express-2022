const index = (req, res) => {
  res.status(200).json({
    nombre: "pepe",
  });
};

module.exports = { index };
