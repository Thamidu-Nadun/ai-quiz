// We get references to the buttons on the page.

const ccnaBtn = document.querySelector("#ccna");
const ccnaBardBtn = document.querySelector("#ccnabard");
const secPlusBtn = document.querySelector("#secplus");
const hallucBtn = document.querySelector("#halluci");
const python = document.querySelector("#python");
const pythonsin = document.querySelector("#pythonsin");
const pythonHard = document.querySelector("#python-hard");
// FC Quiz
const fc1 = document.querySelector("#fc1");
const fc2 = document.querySelector("#fc2");
const fc3 = document.querySelector("#fc3");
const fc4 = document.querySelector("#fc4");
const fc5 = document.querySelector("#fc5");
const fc6 = document.querySelector("#fc6");

// Fundamentals Of Computing
const FC1 = document.querySelector("#FC1");
const FC2 = document.querySelector("#FC2");
const FC3 = document.querySelector("#FC3");
const FC4 = document.querySelector("#FC4");
const FC5 = document.querySelector("#FC5");
const FC6 = document.querySelector("#FC6");
const FC7 = document.querySelector("#FC7");
const FC8 = document.querySelector("#FC8");
const FC9 = document.querySelector("#FC9");

// Technical Writing
const TR1 = document.querySelector("#tr1");

// Data Structures and Algorithms
const DSA1 = document.querySelector("#dsa1");
const DSA2 = document.querySelector("#dsa2");

// We add event listeners to the buttons.
// Depending on the button clicked we create a session variable called quiz and set it to the JSON file we want to load in hte quiz.html. The sessions variable allows us to share
// data between pages. We then redirect the user to the quiz.html page.

ccnaBtn.addEventListener("click", (e) => {
    e.preventDefault();
    sessionStorage.setItem("quiz", "./database/ccna.json");
    location.href = "quiz.html";
});

ccnaBardBtn.addEventListener("click", (e) => {
    e.preventDefault();
    sessionStorage.setItem("quiz", "./database/ccna_bard.json");
    location.href = "quiz.html";
});


secPlusBtn.addEventListener("click", (e) => {
    e.preventDefault();
    sessionStorage.setItem("quiz", "./database/secplus.json");
    location.href = "quiz.html";
});

hallucBtn.addEventListener("click", (e) => {
    e.preventDefault();
    sessionStorage.setItem("quiz", "./database/hallucinations.json");
    location.href = "quiz.html";
});

python.addEventListener("click", (e) => {
    e.preventDefault();
    sessionStorage.setItem("quiz", "./database/python.json");
    location.href = "quiz.html";
});

DCN.addEventListener("click", (e) => {
    e.preventDefault();
    sessionStorage.setItem("quiz", "./database/DCN.json");
    location.href = "quiz.html";
});

java001.addEventListener("click", (e) => {
    e.preventDefault();
    sessionStorage.setItem("quiz", "./database/java1.json");
    location.href = "quiz.html";
});

java002.addEventListener("click", (e) => {
    e.preventDefault();
    sessionStorage.setItem("quiz", "./database/java2.json");
    location.href = "quiz.html";
});

fc2.addEventListener("click", (e) => {
    e.preventDefault();
    sessionStorage.setItem("quiz", "./database/exams/fc2.json");
    location.href = "quiz.html";
});

fc3.addEventListener("click", (e) => {
    e.preventDefault();
    sessionStorage.setItem("quiz", "./database/exams/fc3.json");
    location.href = "quiz.html";
});

fc4.addEventListener("click", (e) => {
    e.preventDefault();
    sessionStorage.setItem("quiz", "./database/exams/fc4.json");
    location.href = "quiz.html";
});

fc5.addEventListener("click", (e) => {
    e.preventDefault();
    sessionStorage.setItem("quiz", "./database/exams/fc5.json");
    location.href = "quiz.html";
});

fc6.addEventListener("click", (e) => {
    e.preventDefault();
    sessionStorage.setItem("quiz", "./database/exams/fc6.json");
    location.href = "quiz.html";
});

// Fundamentals of Computing
FC1.addEventListener("click", (e) => {
    e.preventDefault();
    sessionStorage.setItem("quiz", "./database/exams/FC/fc1.json");
    location.href = "quiz.html";
});

FC2.addEventListener("click", (e) => {
    e.preventDefault();
    sessionStorage.setItem("quiz", "./database/exams/FC/fc2.json");
    location.href = "quiz.html";
});

FC3.addEventListener("click", (e) => {
    e.preventDefault();
    sessionStorage.setItem("quiz", "./database/exams/FC/fc3.json");
    location.href = "quiz.html";
});

FC4.addEventListener("click", (e) => {
    e.preventDefault();
    sessionStorage.setItem("quiz", "./database/exams/FC/fc4.json");
    location.href = "quiz.html";
});

FC5.addEventListener("click", (e) => {
    e.preventDefault();
    sessionStorage.setItem("quiz", "./database/exams/FC/fc5.json");
    location.href = "quiz.html";
});

FC6.addEventListener("click", (e) => {
    e.preventDefault();
    sessionStorage.setItem("quiz", "./database/exams/FC/fc6.json");
    location.href = "quiz.html";
});

FC7.addEventListener("click", (e) => {
    e.preventDefault();
    sessionStorage.setItem("quiz", "./database/exams/FC/fc7.json");
    location.href = "quiz.html";
});

FC8.addEventListener("click", (e) => {
    e.preventDefault();
    sessionStorage.setItem("quiz", "./database/exams/FC/fc8.json");
    location.href = "quiz.html";
});

FC9.addEventListener("click", (e) => {
    e.preventDefault();
    sessionStorage.setItem("quiz", "./database/exams/FC/fc9.json");
    location.href = "quiz.html";
});

pythonsin.addEventListener("click", (e) => {
    e.preventDefault();
    sessionStorage.setItem("quiz", "./database/pythonsin.json");
    location.href = "quiz.html";
});

pythonHard.addEventListener("click", (e) => {
    e.preventDefault();
    sessionStorage.setItem("quiz", "./database/hard/python.json");
    location.href = "quiz.html";
});

TR1.addEventListener("click", (e) => {
    e.preventDefault();
    sessionStorage.setItem("quiz", "./database/exams/TR/tr1.json");
    location.href = "quiz.html";
});

DSA1.addEventListener("click", (e) => {
    e.preventDefault();
    sessionStorage.setItem("quiz", "./database/exams/DSA/dsa1.json");
    location.href = "quiz.html";
});

DSA2.addEventListener("click", (e) => {
    e.preventDefault();
    sessionStorage.setItem("quiz", "./database/exams/DSA/dsa2.json");
    location.href = "quiz.html";
});