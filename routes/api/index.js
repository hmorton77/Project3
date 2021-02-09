const router = require("express").Router();
const stockRoutes = require("./stocks");

// Stock routes
router.use("/stocks", stockRoutes);

module.exports = router;
