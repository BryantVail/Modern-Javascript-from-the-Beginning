//EasyHttp.js

function EasyHttp() {

  this.http = new XMLHttpRequest();

}

//GET request
EasyHttp.prototype.get = function (url, callback) {
  this.http.open("get", url, true);

  let self = this;
  //when using 'this' inside a function, 'this' refers to the function object
  self.http.onload = function () {
    if (self.http.status == 200) {
      callback(null, self.http.responseText);
    } else {
      callback(`Error: ${self.http.status}`);
    }
  };

  this.http.send();
}


//POST request
//PUT request
//DELETE request






