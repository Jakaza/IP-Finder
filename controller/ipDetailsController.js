const path = require("path")
const axios = require("axios")
const dns = require("dns");


const getIpAdressDetails = async (req, res) => {

  const URL = "www.google.com";

  dns.resolve4(URL, (err, addresses) =>{

    if (err) {
      console.log(err);
      return;
    }

    return  res.json({
      message: "request served",
        address: addresses[0]
    })
    
  })
  

  // res.render(path.join(__dirname, "..", "index"), { data })
}


module.exports = {
  getIpAdressDetails
}