// 15_easyHttp
// app.js

const data = {
  name: "John Vail",
  username: "JohnVail",
  email: "johnWallaceVail@gmail.com"
  // id: "11"
};

const id = 2;

const http = new EasyHttp();
const url = "http://jsonPlaceHolder.typicode.com/users";

http
  .get(url)
  .then(data => console.log(data))
  .catch(err => console.log(err));

http
  .post(url, data)
  .then(data => console.log(data))
  .catch(err => console.log(err));

http
  .put(url, data)
  .then(data => console.log(data))
  .catch(err => console.log(err));

http
  .delete(url, id)
  .then(message => console.log(message))
  .catch(err => console.log(err));
