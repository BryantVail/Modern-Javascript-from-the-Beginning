// 02_Ajax-and-XHR-intro

document.querySelector("#button").addEventListener("click", loadData);

function loadData(e) {
  //create XHR object
  const xhr = new XMLHttpRequest();
  console.log("xhr instantiated");

  //open
  //-> define the xhr
  xhr.open("GET", "data.txt", true);
  console.log("xhr defined with open");

  // console.log(`ReadyState: ${xhr.readyState}`);// ReadyState: 1

  // Optional - used for spinners/loaders
  xhr.onprogress = function() {
    console.log(`ReadyState: ${xhr.readyState}`);
  };

  xhr.onload = function() {
    console.log(`ReadyState: ${xhr.readyState}`);
    if (xhr.status === 200) {
      console.log(this.responseText);
      document.getElementById("output").textContent = this.responseText;
    }
  };

  // xhr.onreadystatechange = function() {
  //   //log
  //   console.log(`ReadyState: ${xhr.readyState}`);

  //   if (this.status === 200 && this.readyState === 4) {
  //     console.log(this.responseText);
  //   }
  // };

  xhr.onerror = function() {
    console.log("request error");
  };

  xhr.send();

  // Ready State Values
  //-> 0: request not initialized
  //-> 1: server connection established
  //-> 2: request received
  //-> 3: processing request
  //-> 4: request finished and response is ready

  //HTTP Status list
  //->200: "OK",
  //->403: "Forbidden",
  //->404: "Not Found"

  e.preventDefault();
}
