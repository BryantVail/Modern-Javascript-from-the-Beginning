//07_String Methods and Concatenation

const firstName = "bryant";
const lastName = "vail";

let val;

const tags = "first,second,third,fourth,fifth,sixth";
const str = 
    "Hello, my name is bryant, I'm a programmer- trying to get paid out here.";

val = firstName + lastName;

//Concatenation
val = firstName + " " + lastName; 

//Append
val = 'bryant ';
val += 'vail';

//multi-line
val = "Hello, my name is \
        " + val +", its very nice\
        to meet you.";

//Escaping
val = "That's \"awesome\".";

//Length
val = firstName.length;

//concat method
val = firstName.concat(" ", lastName);//"bryant vail"

//Change Case
val = firstName.toUpperCase();
val = lastName.toLowerCase();
val = firstName[0];//first index of the array of characters

//indexOf()
val = firstName.indexOf("b");//0
val = firstName.lastIndexOf("t");//5

//chartAt()
val = firstName.charAt(0);
val = firstName.charAt(firstName.length -1);//last character

//substring()
val = firstName.substring(0,3);//0-n, not inclusive of n

// slice()
val = firstName.slice(0,4);//brya, characters 0-n
val = firstName.slice(-3);//last -n chars starting from the end

// split()
val = tags.split(",");
//returns a list using the split() argument as the delimiter to 
//  look for.
//returns: Array(6) [ "first", "second", "third", "fourth", "fifth", "sixth" ]


// replace()
val = str.replace("Hello", "Hi there" );

// includes()
val = str.includes("Hello");
//true


console.log(val);















