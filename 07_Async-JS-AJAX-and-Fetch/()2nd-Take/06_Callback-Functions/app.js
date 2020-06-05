//app.js

const posts = [
  {
    title: "post1",
    body: "this is post1"
  },
  {
    title: "post2",
    body: "this is post2"
  },
  {
    title: "post3",
    body: "this is post3"
  },
  {
    title: "post4",
    body: "this is post4"
  },
];


// ---------------------------
// SYNCHRONOUS
// function createPost(post) {
//   setTimeout(function () {
//     posts.push(post);
//   }, 2000);
// }

// function getPosts() {
//   setTimeout(function () {
//     let output = '';
//     posts.forEach(function (post) {
//       output += `
//         <li> ${post.title}</li>
//         <li> ${post.body}</li>
//         <hr>
//       `
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPost({ title: "post 5", body: "this is post 5" });

// getPosts();
// ---------------------------

// ASYNCHRONOUS

function createPost(post, callback) {
  setTimeout(function () {
    posts.push(post);
    callback();
  }, 2000);
}

function getPosts() {
  setTimeout(function () {
    let output = "";
    posts.forEach(function (post) {
      output += `
        <li> ${post.title} </li>
        <li> ${post.body} </li>
        <hr>
      `;
    });
    document.querySelector("#content").innerHTML = output;
  }, 1000);
}

createPost({ title: "title 5", body: "this is the 5th body with callback" }, getPosts);


