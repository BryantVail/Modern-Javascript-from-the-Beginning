// 11_The-Fetch-API.js

document.querySelector("#get-text").addEventListener("click", getText);
document.querySelector("#get-json").addEventListener("click", getJson);
document.querySelector("#get-api-data").addEventListener("click", getApiData);

function getText() {
  //returns promises
  fetch("text.txt") // changed to text1.txt (doesn't exist): "Cannot GET /07_Async-JS-AJAX-and-Fetch/11_The-Fetch-API/text1.txt"
    .then(response => response.text())
    .then(data => {
      document.querySelector("#output").innerHTML = data;
    })
    .catch(function(err) {
      console.log(err);
    });
}

function getJson() {
  fetch("post.json")
    .then(response => response.json())
    .then(data => {
      let output = "";

      data.forEach(function(data) {
        output += `
        <ul>
          <li>${data.title}</li>
          <li>${data.body}</li>
        </ul>
        <hr>
      `;
      });
      document.querySelector("#output").innerHTML = output;
    })
    .catch(err => {
      console.log(err);
      document.querySelector("#output").innerHTML = err;
    });
}

function getApiData() {
  fetch("https://api.github.com/users")
    .then(response => response.json())
    .then(data => {
      let output = "";

      data.forEach(function(data) {
        output += `
          <ul>
            <li>${data.id}</li>
            <li>${data.login}</li>
            <li>${data.type}</li>
            <li>${data.url}</li>
          </ul>
          <hr>
        `;
      });
      document.querySelector("#output").innerHTML = output;
    })
    .catch(err => {
      document.querySelector("#output").innerHTML = err;
      console.log(err);
    });
}

//
