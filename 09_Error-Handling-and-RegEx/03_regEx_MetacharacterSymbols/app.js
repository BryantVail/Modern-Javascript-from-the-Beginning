//03_regEx_Metacharacter-Symbols
//app.js

let re;

//literal chars
re = /hello/i;

//metacharacter symbols

//starts with
re = /^h/i; // must start with

//ends with
re = /d$/i;

//starts and ends
re = /^hello world$/i; // the whole string

//match any 1 character
re = /he.lo/i;

// match any character 0 or more
re = /h*d/i;

//optional character
re = /gre?a?y/i;

//escape character
re = /gre?a?y\?/i;

//_________________________________________
//CHARACTER SETS

// must be either character in the bracket
re = /gr[ae]y/i;

// case sensitive uses without the 'i' key
re = /[GgFf]ray/;

//match any EXCEPT given characters
re = /[^GgFf]ray/i;

//range of characters
re = /[A-Z]ray/;

//number range
re = /[0-9]ray/;

//_________________________________________
//BRACES AND QUANITY

//quantity
re = /He[l]{2}o/i; // must be the exact amount of times

//range of quantity
re = /he[l]{2,4}o/i;

// at least the number of times
re = /he[l]{2,}o/i;

//PARENTHESIS, GROUPING

re = /([0-9]x){3}/i;

//_________________________________________
// shorthand character classes

re = /\w{2}/i; //word character, word character - alphanumeric or '_'
re = /\w+/i; // '+' = one or more
re = /\W/; //non-word characters: `~!@#$%^&*()- :;'"[]{}\|,<.>/?
re = /\d+/; //digits
re = /\D/; // non-digits
re = /\s/; //match white space
re = /\S/; //match non-white space; anything but white space
re = /\bHell/i; // specify the end or beginning of a word
// const str = "heller welcome to hell";

//_________________________________________
// ASSERTIONS

re = /x(?=y)/; //match x only if its followed by 'y'
re = /x(?!y)/; // only if not 'y'

//string to evaluate
const str = "xdafsdfaohergnioxy";

//log results
const result = re.exec(str);
console.log(result);

function regExTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches the ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}

regExTest(re, str);

//
