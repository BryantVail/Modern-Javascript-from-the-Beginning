const http = new EasyHttp();

http.get("https://jsonplaceholder.typicode.com/posts", function (err, response) {
  if (err) {
    console.log(err); //Error: 404
  } else {
    console.log(response);
  }
});

// console.log(posts);//undefined without a callback