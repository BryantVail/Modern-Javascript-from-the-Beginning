//async keyword makes the function return a promise
// async function myFunction() {
//   // return "hello";

//   const promise = new Promise((resolve, reject) => {
//     //returns 'hello'
//     setTimeout(() => resolve("hello"), 1000);
//   });

//   err = true;
//   if (!err) {
//     const res = await promise; // wait until the promise is resolved
//     return res;
//   } else {
//     await Promise.reject(new Error("Something went wrong"));
//   }
// }

// myFunction()
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

async function getUsers(url) {
  //await the response of the fetch call; fetch returns a promise
  const response = await fetch(url);

  //once fetch returns to the 'response variable, await response.json promise
  //-> to complete
  const data = await response.json();

  return data;
}
const url = "https://jsonPlaceHolder.typicode.com/users";
getUsers(url).then(users => console.log(users));
