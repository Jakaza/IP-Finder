const express = require("express")
const router = express.Router();
const { homePage } = require("../controller/pageController")
const { getSearchedIpAddress, getSearchedDomainAddress } = require("../controller/searchController")


router.get('/', homePage);
router.get('/api/address/:keyname', getSearchedIpAddress);
router.get('/api/domain/:keyname', getSearchedDomainAddress);

module.exports = router;