const store = async (req, res) => {
  // console.log(req.body);
  if (req.body) {
    return res.status(200).json({ status: 200, msg: "okay" });
  } else {
    return res
      .status(404)
      .json({ status: 404, msg: "No se recibieron los datos" });
  }
};

module.exports = {
  store,
};
