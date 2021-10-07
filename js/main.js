const quizData = [
  
  {
    question: 'How do you declare a JavaScript variable?',
    a: 'variable nameTest',
    b: 'v nameTest',
    c: '$nameTest',
    d: 'var nameTest',
    correct: 'd',
  },

  {
    question: 'Which operator is used to assign a value to a variable?',
    a: '*',
    b: '=',
    c: '+',
    d: '-',
    correct: 'b',
  },
  
  {
    question: 'Where is the correct place to insert a JavaScript?',
    a: '<body> section',
    b: '<head> section',
    c: '<div> section',
    d: 'None',
    correct: 'a',
  },

  {
    question: 'How do you write "Hello World" in an alert box?',
    a: 'msg("Hello World)',
    b: 'alertBox("Hello World)',
    c: 'alert("Hello World")',
    d: 'msgBox("Hello World")',
    correct: 'c',
  },

  {
    question: 'How do you create a function in JavaScript?',
    a: 'function = myFunction()',
    b: 'function myFunction()',
    c: 'function:myFunction()',
    d: 'function',
    correct: 'b',
  },

  {
    question: 'How can you add a comment with ONE LINE in a JavaScript?',
    a: '<!--Comment-->',
    b: '"Comment"',
    c: '/*Comment*/',
    d: '//Comment',
    correct: 'd',
  },

  {
    question: 'Which event occurs when the user clicks on an HTML element?',
    a: 'onmouseclick',
    b: 'onclick',
    c: 'onmouseover',
    d: 'onchange',
    correct: 'b',
  },

  {
    question: 'What will the following code return: Boolean(10 > 9)',
    a: 'NaN',
    b: 'False',
    c: 'True',
    d: 'Undefined',
    correct: 'c',
  },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionText = document.getElementById('question');
const text_a = document.getElementById('text_a');
const text_b = document.getElementById('text_b');
const text_c = document.getElementById('text_c');
const text_d = document.getElementById('text_d');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionText.innerText = currentQuizData.question;
  text_a.innerText = currentQuizData.a;
  text_b.innerText = currentQuizData.b;
  text_c.innerText = currentQuizData.c;
  text_d.innerText = currentQuizData.d;
}

function getSelected(){

  let answer = undefined;

  answerEls.forEach((answerEl) =>{
    if(answerEl.checked){
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers(){
  answerEls.forEach((answerEl) =>{
    answerEl.checked = false;
  });
}

submitBtn.addEventListener('click',() => {
  // check to see the answer
  const answer = getSelected();

  if(answer){
    if(answer === quizData[currentQuiz].correct){
      score++;
    }

    currentQuiz++;
    if(currentQuiz < quizData.length){
      loadQuiz();
    } else{
      quiz.innerHTML = `
      <h2>You answered correctly at ${score}/ ${quizData.length} questions</h2>
      <button onclick="location.reload()">Reload</button>`;
    }
  }
});


