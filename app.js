const loaderEl = document.getElementById('loader-container');
const searchButton = document.getElementById('search-addon');
const inputEl = document.querySelector('.inputEl');
document.addEventListener('DOMContentLoaded', loadData)

function loadData() {

    let http = new XMLHttpRequest();
    http.onload = function () {
        if (this.status == 200) {
            let data = JSON.parse(http.response);
            displayData(data);
        }
    }
    http.onprogress = function () {
        loaderEl.style.display = 'block';
    }
    http.open('GET', 'http://ip-api.com/json/')
    http.send();
}

function displayData(data) {
    loaderEl.style.display = 'none';
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
}



