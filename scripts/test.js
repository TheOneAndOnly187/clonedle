document.addEventListener("keydown", keyEventTest);

function keyEventTest(event) {
    console.log(event.key);
}

let word = "Hello";
console.log(word);
word = word.substring(0, word.length -1);
console.log(word);
