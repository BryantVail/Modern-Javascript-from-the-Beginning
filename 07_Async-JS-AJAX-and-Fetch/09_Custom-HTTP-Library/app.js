//09_Custom-HTTP-Library
//app.js

const http = new EasyHTTP();

let postId = 5;
let url = "https://jsonPlaceholder.typicode.com/posts";
const idToUpdate = 5;
let data = {
  title: "custom post",
  body: "this is a custom post",
  userId: "bryant"
};

// get posts
// http.get("https://jsonPlaceholder.typicode.com/posts", function(
//   err /*null*/,
//   posts
// ) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

// GET single post
http.get(`http://jsonPlaceholder.typicode.com/posts/${postId}`, function(
  err,
  post
) {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
});

//Post a new record
http.post(url, data, function(err, dataPosted) {
  if (err) {
    console.log(err);
  } else {
    console.log(dataPosted);
  }
});

//PUT Request
http.put(`${url}/${idToUpdate}`, data, function(err, updatedPost) {
  if (err) {
    console.log(err);
  } else {
    console.log(updatedPost);
  }
});

//DELETE
http.delete(`${url}/${idToUpdate}`, function(err, result) {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
});
