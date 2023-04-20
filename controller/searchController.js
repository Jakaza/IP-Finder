const dns = require("dns");
const axios = require("axios")

const getSearchedIpAddress = (req, res ) =>{

  let ip_address = req.params.keyname;

  
    
  axios.get(`http://ipwho.is/${ip_address}`)
      .then(function (response) {
        return res.json({
          ip: ip_address,
          data :response.data
        })
      })
      .catch(function (error) {
        console.log(error)
        res.json({
          ip: ip_address,
          error
        })
      })
}


const getSearchedDomainAddress = (req, res ) =>{
    let searchedValue = req.params.keyname;
    dns.resolve4(searchedValue, (err, addresses) => {
        if (err) {
          console.log(err);
          return;
        }
      const ip_address = addresses[0];
      
      axios.get(`http://ipwho.is/${ip_address}`)
      .then(function (response) {
        return res.json({
          ip: ip_address,
          data :response.data
        })
      })
      .catch(function (error) {
        console.log(error)
        res.json({
          ip: ip_address,
          error
        })
      })
    
  })
}




module.exports = {
  getSearchedIpAddress,
  getSearchedDomainAddress
}