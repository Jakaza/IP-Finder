const express = require("express")
const router = express.Router();
const { getIpAdressDetails } = require("../controller/ipDetailsController")
const { getSearchedIpAddress } = require("../controller/searchController")


router.get('/', getIpAdressDetails);
router.get('/api/v1/:keyname', getSearchedIpAddress);

module.exports = router;