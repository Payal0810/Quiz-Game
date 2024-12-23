const quesJSON = [
  {
    correctAnswer: 'Three ',
    options: ['Two', 'Three ', 'Four', 'Five'],
    question:
      "How many pieces of bun are in a Mcdonald's Big Mac?",
  },
  {
    correctAnswer: 'L. Frank Baum',
    options: [
      'Suzanne Collins',
      'James Fenimore Cooper',
      'L. Frank Baum',
      'Donna Leon',
    ],
    question:
      "Which author wrote 'The Wonderful Wizard of Oz'?",
  },
  {
    correctAnswer: 'Atlanta United',
    options: [
      'Atlanta United',
      'Atlanta Impact',
      'Atlanta Bulls',
      'Atlanta Stars',
    ],
    question:
      'Which of these is a soccer team based in Atlanta?',
  },
  {
    correctAnswer: 'A Nanny',
    options: [
      'A Sow',
      'A Lioness',
      'A Hen',
      'A Nanny',
    ],
    question: 'A female goat is known as what?',
  },
  {
    correctAnswer: 'P. L. Travers',
    options: [
      'J. R. R. Tolkien',
      'P. L. Travers',
      'Lewis Carroll',
      'Enid Blyton',
    ],
    question:
      "Which author wrote 'Mary Poppins'?",
  },
];

    let score = 0;
    let currentQuestion = 0;
    const totalScore = quesJSON.length;

    const ques = document.querySelector('#question');
    const option = document.querySelector('#options');
    const scores = document.querySelector('#score');
    const nextBtn = document.querySelector('#next');

    showQuestion();

    nextBtn.addEventListener("click", ()=>{
      scores.textContent = `Score : ${score}/${totalScore}`;
      nextQuestion();
    });

function showQuestion(){
  const{correctAnswer, options, question} = quesJSON[currentQuestion];

  ques.textContent = question;

  let shuffledOptions = shuffle(options);

  shuffledOptions.forEach((ans) => {
    const btn = document.createElement("button");
    btn.textContent = ans;
    option.appendChild(btn);
  
    btn.addEventListener("click", ()=>{
      if(ans.trim() === correctAnswer.trim()){
        score++;
      }
      else{
        score = score-0.25;
      }
      scores.textContent = `Score : ${score}`;
      nextQuestion();

    });
  });
}

function nextQuestion(){
  currentQuestion++;
  option.textContent = '';

  if(currentQuestion == quesJSON.length){
    ques.textContent = "Quiz Completed!!";
    nextBtn.remove();
  }
  else{
    showQuestion();
  }
}

function shuffle(options){
  for(let i=options.length-1; i>=0; i--){
    let j = Math.floor(Math.random()*i+1);
    [options[i], options[j]] = [options[j], options[i]];
  }
  return options;
}

