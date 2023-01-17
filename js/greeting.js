let greetings = [
    "Hi there",
    "Hello there",
    "Good day",
    "Howdy",
    "G'day",
    "Yo"
]

function addGreeting(id) {
    let e = document.getElementById(id);
    e.innerText = "";

    e.innerText = greetings[Math.floor(Math.random() * greetings.length)] + ",";
}