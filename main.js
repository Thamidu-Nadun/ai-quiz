// We get references to the buttons on the page.

const ccnaBtn = document.querySelector("#ccna");
const ccnaBardBtn = document.querySelector("#ccnabard");
const secPlusBtn = document.querySelector("#secplus");
const hallucBtn = document.querySelector("#halluci");
const python = document.querySelector("#python");
const pythonsin = document.querySelector("#pythonsin");
const pythonHard = document.querySelector("#python-hard");

// We add event listeners to the buttons.
// Depending on the button clicked we create a session variable called quiz and set it to the JSON file we want to load in hte quiz.html. The sessions variable allows us to share
// data between pages. We then redirect the user to the quiz.html page.

ccnaBtn.addEventListener("click", (e) => {
    e.preventDefault();
    sessionStorage.setItem("quiz", "./database/ccna.json");
    location.href="quiz.html";
});

ccnaBardBtn.addEventListener("click", (e) => {
    e.preventDefault();
    sessionStorage.setItem("quiz", "./database/ccna_bard.json");
    location.href="quiz.html";
});


secPlusBtn.addEventListener("click", (e) => {
    e.preventDefault();
    sessionStorage.setItem("quiz", "./database/secplus.json");
    location.href="quiz.html";
});

hallucBtn.addEventListener("click", (e) => {
    e.preventDefault();
    sessionStorage.setItem("quiz", "./database/hallucinations.json");
    location.href="quiz.html";
});

python.addEventListener("click", (e) => {
    e.preventDefault();
    sessionStorage.setItem("quiz", "./database/python.json");
    location.href="quiz.html";
});

DCN.addEventListener("click", (e) => {
    e.preventDefault();
    sessionStorage.setItem("quiz", "./database/DCN.json");
    location.href="quiz.html";
});

java001.addEventListener("click", (e) => {
    e.preventDefault();
    sessionStorage.setItem("quiz", "./database/java1.json");
    location.href="quiz.html";
});

java002.addEventListener("click", (e) => {
    e.preventDefault();
    sessionStorage.setItem("quiz", "./database/java2.json");
    location.href="quiz.html";
});

pythonsin.addEventListener("click", (e) => {
    e.preventDefault();
    sessionStorage.setItem("quiz", "./database/pythonsin.json");
    location.href="quiz.html";
});

pythonHard.addEventListener("click", (e) => {
    e.preventDefault();
    sessionStorage.setItem("quiz", "./database/hard/python.json");
    location.href="quiz.html";
});