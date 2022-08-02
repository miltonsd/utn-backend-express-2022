const store = async (req, res) => {
  const params = req.body;
  if (params) {
    return res.status(200).json({ status: 200, params });
  } else {
    return res
      .status(404)
      .json({ status: 404, msg: "No se recibieron los datos" });
  }
};

module.exports = {
  store,
};
