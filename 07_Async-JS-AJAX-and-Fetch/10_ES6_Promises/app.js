// 10_ES6 Promises

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

function createPost(post) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      posts.push(post);
      // const error = true; // something went wrong
      const error = false; //

      if (!error) {
        // call when we complete our task
        resolve();
      } else {
        reject("Error: something went wrong");
      }
    }, 3000);
  });
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
//bc the returned value is a promise, the function 'then' can be run off
//-> the result, to then run the next function
createPost(thirdPost)
  .then(getPosts)
  .catch(function(err) {
    console.log(err);
  });

console.log("this happens anyway");

//
//

//
