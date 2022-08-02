const Router = require("express");
const router = Router();

const { index, add } = require("../controllers/index.controller");

router.get("/", index);

router.get("/add", add);

module.exports = router;
