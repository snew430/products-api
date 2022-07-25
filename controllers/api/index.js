const router = require("express").Router();

const v1Routes = require("./v1");
const v2Routes = require("./v2");

router.use("/v1", v1Routes);
router.use("/v2", v2Routes);

router.use("/", v1Routes);

module.exports = router;
