var count = 0; 
let countEl = document.getElementById("count-el");
function increment() {
    count++;
    console.log(count);
    countEl.innerText = count;
}

function save() {
console.log(count);
}