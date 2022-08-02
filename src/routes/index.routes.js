const Router = require("express");
const router = Router();

const { index, create, edit } = require("../controllers/index.controller");

router.get("/", index);

router.get("/create", create);

router.get("/edit/:nombre", edit);

module.exports = router;
