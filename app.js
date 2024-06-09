// step 1: define quiz data

const quizData = [
  {
    question: "What does HTML stands for?",
    options: [
      "Hypertext Markup Language",
      "Hyper Transfer Markup Language",
      "Hypertext Machine Language",
      "Hyperlink and Text Markup Language",
    ],
    correct: 0,
  },
  {
    question:
      "Which Css property is used to control the spacing between elements ?",
    options: ["margin", "padding", "spacing", "border-spacing"],
    correct: 1,
  },
  {
    question:
      "What is the Javascript function used to select an HTML element by its id?",
    options: [
      "document.query",
      "getElementById",
      "selectElement",
      "findElementById",
    ],
    correct: 1,
  },
  {
    question:
      "In React.js, which hook is used to perform side effects in a function component? ?",
    options: ["useEffect", "useState", "useContext", "userReducer"],
    correct: 0,
  },
  {
    question: "Which HTML tag is used to create an ordered list?",
    options: ["<ul>", "<li>", "<ol>", "<dl>"],
    correct: 2,
  },
];

// step 2: javascript initialization
const quiz = document.querySelector('#quiz');
const answerElm = document.querySelectorAll(".answer");
const [questionElm, option1, option2, option3, option4] =
  document.querySelectorAll(
    "#question, .option_1, .option_2, .option_3, .option_4"
  );

const submitBtn = document.querySelector("#submit");

let currentQuiz = 0;
let score = 0;

// step 3: Load quiz function

const loadQuiz = () => {
  const { question, options } = quizData[currentQuiz];

  questionElm.innerHTML = question;
  options.forEach(
    (currentElem, idx) => (window[`option_${idx + 1}`].innerText = currentElem)
  );
};

loadQuiz();

// step 4: get selected answer function on button click

const getSelectedOption = () => {
  // first long way:
  // let ans_idx;
  // answerElm.forEach((curOpt,idx)=>{
  //     if (curOpt.checked) {
  //         ans_idx = idx;
  //     }
  // });
  // return ans_idx;

  // second short way:

  let answerElemenet = Array.from(answerElm);
  return answerElemenet.findIndex((curElem) => curElem.checked);
};

// deslectedAnswer function:

const deselectedAnswer = () => {
  answerElm.forEach((curElem) => (curElem.checked = false));
};

submitBtn.addEventListener("click", () => {
  const selectedOptionIdx = getSelectedOption();
  console.log(selectedOptionIdx);

  if (selectedOptionIdx === quizData[currentQuiz].correct) {
    score = score + 1;
  }

  currentQuiz++;

  if (currentQuiz < quizData.length) {
    deselectedAnswer();
    loadQuiz();
  } else {
    quiz.innerHTML = `
    <div class="result">
    <h2>🏆 Your Score: ${score}/${quizData.length} Correct Answers </h2>
    <p>Congratulations on completing the quiz!  🎉</p>
    <button class="reload-button" onclick="location.reload()">Play Again 🔄</button>
    </div>
    `;
  }
});
