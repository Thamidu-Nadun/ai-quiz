// We get the quiz variable from the sessionStorage.
let quiz = sessionStorage.getItem("quiz");

// We use the quiz variable to change the heading of the page. If it says ./ccna.json it'll be CCNA, else it is Security+.
const heading = document.querySelector("#exam-type");
if (quiz === "./database/ccna.json") {
  heading.textContent = "CCNA";
} else if (quiz === "./database/ccna_bard.json") {
  heading.textContent = "CCNA Bard";
} else if (quiz === "./database/secplus.json") {
  heading.textContent = "Security+";
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
} else if (quiz === "./database/exams/OOP/oop3.json") {
  heading.textContent = "OOP - 3";
} else if (quiz === "./database/exams/OOP/oop4.json") {
  heading.textContent = "OOP - 4";
} else if (quiz === "./database/exams/DM/dm1.json") {
  heading.textContent = "DM - 1";
}

// Dynamic import of the JSON file using session variables.
let filePath = quiz;

async function fetchQuestions(filePath) {
  const response = await fetch(filePath);
  const questions = await response.json();
  return questions;
}

const form = document.querySelector("form");
let state = 0;

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const questions = await fetchQuestions(filePath);

  if (state === 1) {
    location.reload();
  } else {
    state = 1;
    let score = 0;
    let answers = [];

    questions.questions.forEach((question, index) => {
      const answer = document.querySelector(`input[name="${index}"]:checked`).value;

      answers.push(answer);

      if (answer === question.correct_answer) {
        score++;
        let answerTextEl = document.createElement("p");
        answerTextEl.classList.add(
          "mt-2", "p-2", "rounded",
          "text-green-700", "bg-green-100",
          "dark:text-green-400", "dark:bg-green-900"
        );
        answerTextEl.textContent = "Correct!";
        const questionEl = document.querySelector(`div.question:nth-child(${index + 1})`);
        questionEl.appendChild(answerTextEl);
      } else {
        let answerTextEl = document.createElement("p");
        let answerText = question.explanation;
        answerTextEl.classList.add(
          "mt-2", "p-2", "rounded",
          "text-red-700", "bg-red-100",
          "dark:text-red-400", "dark:bg-red-900"
        );
        answerTextEl.textContent = `Correct answer: ${question.correct_answer} - ${answerText}`;
        const questionEl = document.querySelector(`div.question:nth-child(${index + 1})`);
        questionEl.appendChild(answerTextEl);
      }

      let scoreEl = document.getElementById("score");
      scoreEl.textContent = `${(score / answers.length * 100).toFixed(2)}%`;

      submit.value = "Reset";
    });
  }
});

const submit = document.createElement("input");
submit.setAttribute("type", "submit");
submit.classList.add("submit-button");

(async function createQuestions() {
  const questions = await fetchQuestions(filePath);

  questions.questions.forEach((question, index) => {
    // Process question text to handle code blocks
    let questionText = question.question;
    if (questionText.includes('<pre>')) {
      questionText = questionText.replace(/<pre><code class="language-(\w+)">([\s\S]*?)<\/code><\/pre>/g,
        (match, lang, code) => {
          const languageName = getLanguageName(lang);
          return `
            <div class="code-block">
              <div class="code-header">
                <span class="language-indicator language-${lang}">${languageName}</span>
              </div>
              <div class="code-content">
                <pre><code class="language-${lang}">${code.trim()}</code></pre>
              </div>
            </div>`;
        }
      );
    }

    form.innerHTML += `
      <div class="question">
        <div class="question-text">${questionText}</div>
        <div class="option">
          <input type="radio" name="${index}" value="A" checked="checked">
          <label>${question.option_a}</label>
        </div>
        <div class="option">
          <input type="radio" name="${index}" value="B">
          <label>${question.option_b}</label>
        </div>
        <div class="option">
          <input type="radio" name="${index}" value="C">
          <label>${question.option_c}</label>
        </div>
        <div class="option">
          <input type="radio" name="${index}" value="D">
          <label>${question.option_d}</label>
        </div>
      </div>`;
  });

  form.appendChild(submit);

  // Initialize syntax highlighting for all code blocks
  document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightElement(block);
  });
})();

// Helper function to get language display name
function getLanguageName(lang) {
  const languageMap = {
    'python': 'Python',
    'javascript': 'JavaScript',
    'java': 'Java',
    'cpp': 'C++',
    'html': 'HTML',
    'css': 'CSS',
    'sql': 'SQL'
  };
  return languageMap[lang] || lang;
}
