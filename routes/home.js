const express = require("express")
const router = express.Router();
const { getIpAdressDetails } = require("../controller/ipDetailsController")
const { getSearchedIpAddress, getSearchedDomainAddress } = require("../controller/searchController")


router.get('/', getIpAdressDetails);
router.get('/api/address/:keyname', getSearchedIpAddress);
router.get('/api/domain/:keyname', getSearchedDomainAddress);

module.exports = router;