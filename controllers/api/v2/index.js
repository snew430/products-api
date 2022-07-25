const router = require("express").Router();
const productRoutes = require("./products");
const categoryRoutes = require("./categories");
const reviewRoutes = require("./reviews");

router.use("/products", productRoutes);
router.use("/categories", categoryRoutes);
router.use("/reviews", reviewRoutes);

module.exports = router;
