// We get the quiz variable from the sessionStorage.
let quiz = sessionStorage.getItem("quiz");

// We use the quiz variable to change the heading of the page. If it says ./ccna.json it'll be CCNA, else it is Security+.
const heading = document.querySelector("#exam-type");
if (quiz === "./database/ccna.json") {
    heading.textContent = "CCNA";
} else if (quiz === "./database/secplus.json") {
    heading.textContent = "Security+";
} else if (quiz === "./database/ccna_bard.json") {
    heading.textContent = "CCNA";
} else if (quiz === "./database/hallucinations.json") {
    heading.textContent = "Hallucinations";
} else if (quiz === "./database/python.json") {
    heading.textContent = "python";
} else if (quiz === "./database/DCN.json") {
    heading.textContent = "DCN";
} else if (quiz === "./database/java1.json") {
    heading.textContent = "java001";
} else if (quiz === "./database/java2.json") {
    heading.textContent = "java002";
} else if (quiz === "./database/hard/python.json") {
    heading.textContent = "python | Hard";
} else if (quiz === "./database/exams/fc2.json") {
    heading.textContent = "FC 2";
} else if (quiz === "./database/exams/fc3.json") {
    heading.textContent = "FC 3";
} else if (quiz === "./database/exams/fc4.json") {
    heading.textContent = "FC 4";
} else if (quiz === "./database/exams/fc5.json") {
    heading.textContent = "FC 5";
} else if (quiz === "./database/exams/fc6.json") {
    heading.textContent = "FC 6";
} else if (quiz === "./database/exams/FC/fc1.json") {
    heading.textContent = "FC - 1";
} else if (quiz === "./database/exams/FC/fc2.json") {
    heading.textContent = "FC - 2";
} else if (quiz === "./database/exams/FC/fc3.json") {
    heading.textContent = "FC - 3";
} else if (quiz === "./database/exams/FC/fc4.json") {
    heading.textContent = "FC - 4";
} else if (quiz === "./database/exams/FC/fc5.json") {
    heading.textContent = "FC - 5";
} else if (quiz === "./database/exams/FC/fc6.json") {
    heading.textContent = "FC - 6";
} else if (quiz === "./database/exams/FC/fc7.json") {
    heading.textContent = "FC - 7";
} else if (quiz === "./database/exams/FC/fc8.json") {
    heading.textContent = "FC - 8";
} else if (quiz === "./database/exams/FC/fc9.json") {
    heading.textContent = "FC - 9";
} else if (quiz === "./database/exams/TR/tr1.json") {
    heading.textContent = "TR - 1";
} else if (quiz === "./database/exams/DSA/dsa1.json") {
    heading.textContent = "DSA - 1";
} else if (quiz === "./database/exams/DSA/dsa2.json") {
    heading.textContent = "DSA - 2";
} else if (quiz === "./database/exams/OOP/oop1.json") {
    heading.textContent = "OOP - 1";
} else if (quiz === "./database/exams/OOP/oop2.json") {
    heading.textContent = "OOP - 2";
}


// Dynamic import of the JSON file using session variables.
let filePath = quiz;

let quizImport = await import(filePath, {
    assert: { type: "json" },
});
const questions = quizImport.default

// We get a reference to the form element.
const form = document.querySelector('form');
// We keep the state to 0 in the beginning. Once the form has been submitted we'll change the state to 1. The submit button will then reload the page, hence reset the state to 0.
let state = 0;

form.addEventListener('submit', (event) => {
    console.log(state);
    event.preventDefault();
    if (state === 1) {
        location.reload();
    } else {
        state = 1;
        // We assign a score of 0 to the user in the beginning.
        let score = 0;
        // We create an array to store the answers.
        let answers = [];

        // We loop through the questions to get the checked radio buttons.
        questions.questions.forEach((question, index) => {
            // We get the value of the checked radio button.
            const answer = document.querySelector(`input[name="${index}"]:checked`).value;
            console.log(answer);

            // We push the answer to the answers array.
            answers.push(answer);

            // We check if the answer is correct.
            if (answer === question.correct_answer) {
                score++;
            }
            else {
                // Create text with the explanation when you answer incorrectly.
                let answerTextEl = document.createElement('p');
                let answerText = question.explanation;
                // We add a class of .incorrect to the element we created for the answer text.
                answerTextEl.classList.add('incorrect');
                answerTextEl.textContent = `${question.correct_answer} - ${answerText}`;
                const questionEl = document.querySelector(`div.question:nth-child(${index + 1})`);
                questionEl.appendChild(answerTextEl);
            }

            // Change score on submit.
            let scoreEl = document.querySelector('.score');
            scoreEl.textContent = `You scored ${(score / answers.length * 100).toFixed(2)}%`;

            // Change submit button text to say reset.
            submit.value = "Reset";
        });
    }

});

// Create a submit button.
const submit = document.createElement('input');
submit.setAttribute('type', 'submit');
submit.classList.add('submit-button');

// Create all the questions that goes into the form.
questions.questions.forEach((question, index) => {
    console.log(question)
    const questionShown = form.innerHTML += `<div class="question"><p>${question.question}</p><div class="option"><input type="radio" name="${index}" value="A" checked="checked"><label for="${index}">${question.option_a}</label></div><div class="option"><input type="radio" name="A" value="B"><label>${question.option_b}</label></div><div class="option"><input type="radio" name="${index}" value="C"><label>${question.option_c}</label></div><div class="option"><input type="radio" name="${index}" value="D"><label>${question.option_d}</label></div></div>`;
});

form.appendChild(submit);