//16 | Window Object
//      20:51mins long

//Window: Methods, Objects, Properties

window.console.log(123);

//Alert
// window.alert("hello world");

//Prompt
//  takes input
// const input = prompt("Input text");
// alert(input);

//Confirm
// if(confirm("Are you sure?")){
//     console.log("Yes");
// }else{
//     console.log("No");
// }

//  5:40mins
//  6:15mins

//window size
let val;

val = window.outerHeight;
//innerHeight would exclude the urlBar, and non-site attributes
console.log(`Outer height of the window: ${val}`);

val = window.outerWidth;
//innerWidth would be inside the scrollbars
console.log(`Outer width of the window: ${val}`);


//  8:45mins

//Scroll Position
val = window.scrollY;
console.log(val);

//  10:00mins

//Location Object
val = window.location;

val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;//query string: ?id=1&name=bryant

//Redirect
//      13:00mins
// window.location.href = "https://packtpub.com";

//Reload
// window.location.reload();

//      14:30mins
//History
//
// window.history.go(-2);
val = window.history.length;

//      16:24mins
//Navigator Object
//  
val = window.navigator;
//18:27mins
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
    //win32:Windows, Darwin:MAC
val  = window.navigator.vendor;// {blank}
val = window.navigator.language;

console.log(val);
