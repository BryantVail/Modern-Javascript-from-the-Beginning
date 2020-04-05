// try catch
//-> app.js

const user = {
  email: "bryantvail@gmail.com"
};

try {
  //reference error
  // myFunction(); //not defined

  //type error
  // null.myFunction();

  //syntax error
  // console.log(eval("hello world"));//attempts to evaluate variables

  //uri error
  // decodeURIComponent("%"); //URIError: "malformed URI sequence"

  if (!user.name) {
    // throw "user has no name";
    throw new SyntaxError("User has no name");
  }

  //
} catch (err) {
  console.log(`User Error: ${err.message}`);
  // console.log(err.message);
  // console.log(err.name);
  // console.log(err instanceof ReferenceError); //true
} finally {
  console.log("runs finally regaurdless of result");
}

console.log("program continue");
