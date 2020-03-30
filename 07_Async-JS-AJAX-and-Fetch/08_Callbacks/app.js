// 08_Callbacks

const posts = [
  {
    title: "post1",
    body: "this is post1"
  },
  {
    title: "post2",
    body: "this is post2"
  }
];

// function createPost(post) {
//   setTimeout(function() {
//     posts.push(post);
//   }, 3000);
// }

// function getPosts() {
//   setTimeout(function() {
//     let output = "";
//     posts.forEach(function(post) {
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPost({ title: "post three", body: "post three body" });

// getPosts();

function createPost(post, callback) {
  setTimeout(function() {
    posts.push(post);
    callback();
  }, 3000);
}

function getPosts() {
  setTimeout(function() {
    let output = "";
    posts.forEach(function(post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

const thirdPost = { title: "post three", body: "post three body" };
createPost(thirdPost, getPosts);

console.log("this happens anyway");

//
//
