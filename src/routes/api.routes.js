const Router = require("express");
const router = Router();

const { store } = require("../controllers/api.controller");

router.post("/store", store);

module.exports = router;
