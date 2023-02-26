const path = require("path")


const currentUserIp = (req, res) => {
  


  let name = "Jakaza";



  res.render(path.join(__dirname, "..", "index"), { name })
}


module.exports = {
  currentUserIp
}