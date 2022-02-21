const loaderEl = document.getElementById('loader-container');
const searchButton = document.getElementById('search-addon');
const inputEl = document.getElementById('inputEl');

document.addEventListener('DOMContentLoaded', loadData)
document.addEventListener('click', fetchData)

function loadData() {

    let http = new XMLHttpRequest();
    http.onload = function() {
        if (this.status == 200) {
            let data = JSON.parse(http.response);
            displayData(data);
        }
    }
    http.onprogress = function() {
        loaderEl.style.display = 'block';
    }
    http.open('GET', 'http://ip-api.com/json/')
    http.send();
}


async function fetchData() {
    try {
        const inputValue = inputEl.value;
        let response = await fetch('http://ip-api.com/json/' + inputValue)
        let data = await response.json();
        displayData(data);

    } catch (error) {
        console.log("data not found");
    }
}


function displayData(data) {
    loaderEl.style.display = 'none';

    console.log(data);

    if (data.status == "success") {
        let { as, city, country, countryCode, isp, lat, lon, org, query, region, regionName, timezone, zip } = data;

        document.getElementById('name').innerHTML = city;
        document.getElementById('ipAddress').innerHTML = query;

        let template = `
        <tbody>
            <tr>
              <th scope="row">city</th>
              <td>${city}</td>
            </tr>
            <tr>
              <th scope="row">country</th>
              <td>${country}</td>
            </tr>
             <tr>
              <th scope="row">countryCode</th>
              <td>${countryCode}</td>
            </tr>
             <tr>
              <th scope="row">latitute</th>
              <td>${lat}</td>
            </tr>
             <tr>
              <th scope="row">longitute</th>
              <td>${lon}</td>
            </tr>
             <tr>
              <th scope="row">organization</th>
              <td>${org}</td>
            </tr>
             <tr>
              <th scope="row">IP Address</th>
              <td>${query}</td>
            </tr>
               <tr>
              <th scope="row">timezone</th>
              <td>${timezone}</td>
            </tr>
               <tr>
              <th scope="row">zip</th>
              <td>${zip}</td>
            </tr>
          </tbody>
    `;
        document.querySelector('.table').innerHTML = template;
    } else {

        document.getElementById('name').innerHTML = "Does not Exist";
        document.getElementById('ipAddress').innerHTML = data.query;

        errTemplate = `
        <div class="invalid-container">
        <div class="inner-invalid-container">
            <h3>status : ${data.status}</h3>
            <p>${data.message}</p>
            <div class="img-container">
                <img src="/500944-200.png" alt="" srcset="">
            </div>
        </div>
        </div>
      `
        document.querySelector('.table').innerHTML = errTemplate;
    }
}