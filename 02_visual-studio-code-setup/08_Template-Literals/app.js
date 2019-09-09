//08 | Template Literals
//ES6, but compatible

const name = "Bryant";
const age = 29;
const job  = "web developer";
const city = "Deland";

//Without Template Strings
//ES5

let UnorderedList_Person;

UnorderedList_Person = 
//3:34min
//4:30min: separate lines

        "<ul>\
            <li>Name:\t"+name+"</li>\
            <li>Age: \t"+age+"</li>\
            <li>Job: \t"+job+"</li>\
            <li>City: \t"+city+"</li>\
        </ul>";

document.body.innerHTML = UnorderedList_Person;

function hello(){
    return "Hello";
}
//With Template Strings
html =
    //backtick used instead of single/double quote
    `
        <ul>
            <li>Name:   ${name}</li>
            <li>Age:    ${age}</li>
            <li>Job:    ${job}</li>
            <li>2+2:   ${2+2}</li>
            <li>City:   ${hello()}</li>
            <li>City:   ${age > 30 ? "Over 30": "Under 30"}</li>
        </ul>
    `;

document.body.innerHTML = html;
