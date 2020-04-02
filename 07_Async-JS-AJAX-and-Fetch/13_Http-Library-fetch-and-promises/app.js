// 13_Http-Library-fetch-and-promises

// https://jsonplaceholder.typicode.com/
const http = new EasyHttp();
const data = {
  name: "John Vail",
  username: "JohnVail",
  email: "johnWallaceVail@gmail.com"
  // id: "11"
};

const url = "https://jsonplaceHolder.typicode.com";
//get users
// http
//   .get("https://jsonplaceholder.typicode.com/users")
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// http
//   .post(`${url}/users`, data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));
// Object { name: "John Vail", username: "JohnVail", email: "johnWallaceVail@gmail.com", id: 11 }

// http
//   .put(`${url}/users/2`, data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));
// Object { name: "John Vail", username: "JohnVail", email: "johnWallaceVail@gmail.com", id: 2 }

const id = 2;
http
  .delete(`${url}/users/`, id)
  .then(data => console.log(`Record with id: ${id} has been removed`))
  .catch(err => console.log(err));
