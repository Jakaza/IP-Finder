const path = require("path")


const currentUserIp = (req, res) =>{
  res.render(path.join(__dirname, "..", "index"))
}


module.exports = {
  currentUserIp
}