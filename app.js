
const formEl = document.getElementById("formEl");


formEl.addEventListener("submit", (el)=>{
  el.preventDefault();

  let URL = formEl['url'].value;

  console.log(URL);

})

const lookup = (url) =>{
  const request = new XMLHttpRequest();
  request.open("GET", url,true);
  request.onload = () =>{
    if(request.readyState == 4 && request.status == 200){
      const data = JSON.parse(request.response)
      console.log(data);
    } 
  }
  request.onprogress = () =>{
    console.log("Loading DATA");
  }
  request.send();
}

function displayData(data) {
  
}

// window.addEventListener('DOMContentLoaded', lookup("http://ipwho.is"))










