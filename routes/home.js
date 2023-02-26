const express = require("express")
const router = express.Router();
const { currentUserIp } = require("../controller/ipDetailsController")

router.get('/',currentUserIp);

module.exports = router;