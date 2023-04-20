const path = require("path")
const axios = require("axios")
const dns = require("dns");


const homePage = async (req, res) => {
  res.render(path.join(__dirname, "..", "index"))
}

module.exports = {
  homePage
}