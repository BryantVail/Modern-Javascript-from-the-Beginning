//app.js

document.querySelector("#get-data-button").addEventListener("click", loadData);


function loadData(e) {

  const xhr = new XMLHttpRequest();

  //open
  xhr.open('get', 'data.txt', true);

  console.log(`ReadyState: ${xhr.readyState}`);

  // progressbars /optional method
  xhr.onprogress = function () {
    console.log(`ReadyState: ${xhr.readyState}`);
  };

  xhr.onload = function () {
    if (this.status == 200) {
      // console.log(this.responseText);
      document.querySelector("#output").innerHTML = `
        <h1>${this.responseText}</h1>
      `;
    }
  }; //end onload

  //HTTP Statuses
  // 200: "OK",
  // 403: "Forbidden", 
  // 404: "Not Found"

  // what would have to be done before 'onload' function
  // xhr.onreadystatechange = function () {
  //   console.log(`ReadyState: ${xhr.readyState}`);
  //   if (this.status == 200 && this.readyState == 4) {
  //     //proceed
  //     console.log(this.responseText);
  //   }
  // };

  xhr.onerror = function () {
    console.log("error");
  }

  xhr.send();

  // readyState values
  // 0: not initialized
  // 1: server connection established
  // 2: request received
  // 3: processing request
  // 4: finished & response is ready

  e.preventDefault();
};



