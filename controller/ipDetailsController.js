const path = require("path")
const axios = require("axios")


const currentUserIp = async (req, res) => {

  const raw = await axios.get("http://ipwho.is")
  const data = await raw.data;
  
  res.render(path.join(__dirname, "..", "index"), { data })
}


module.exports = {
  currentUserIp
}