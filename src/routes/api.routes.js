const Router = require("express");
const router = Router();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

const { store } = require("../controllers/api.controller");

router.post("/store", jsonParser, store);

module.exports = router;
