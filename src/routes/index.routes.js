const Router = require("express");
const router = Router();

const {
  index,
  create,
  edit,
  show,
  store,
  destroy,
  update,
} = require("../controllers/index.controller");

router.get("/", index);

router.get("/create", create);

router.get("/show/:nombre", show);

router.get("/edit/:nombre", edit);

// API

router.post("/store", store);

router.patch("/:id", update);

router.delete("/:id", destroy);

module.exports = router;
