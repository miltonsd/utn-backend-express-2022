const Router = require("express");
const router = Router();

const { index } = require("../controllers/index.controller");

router.get("/home", index);

module.exports = router;
