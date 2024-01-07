var count = 0;
let countEl = document.getElementById("count-el");
function increment() {
    count++;
    console.log(count);
    countEl.textContent = count;
}



let saveEl = document.getElementById("save-el");

function save() {
    countText = count + " - ";
    saveEl.textContent +=  countText;
    count = 0;
    countEl.textContent = count;
}























// let n="Shehryar";
// let greeting = "Hello! my name is ";
// let myGreetings = greeting + n;

// console.log(myGreetings);
// console.log(4 + 5);
// console.log("4 + 5");
// console.log("4" + "5");
// console.log(4 + "5");
// console.log("4" + 5);
// console.log("4" - 2);   
// console.log("4" * 2);

// headingText = "Shehryar's First Website";
// myName = "Shehryar";
// greeting = `Hey! my name is ${myName}, welcome to my website!`;
// heading.innerText = headingText;
// para.innerText = greeting;


// para.innerText += " 👋🏻 ";