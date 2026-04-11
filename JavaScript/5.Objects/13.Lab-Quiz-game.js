const questions = [
  {
    category: "Trivia",
    question: "What color is the sky?",
    choices: ["Blue", "White", "Green"],
    answer: "Blue",
  },
  {
    category: "Trivia",
    question: "What are you?",
    choices: ["Dirt", "White", "Green"],
    answer: "Dirt",
  },
  {
    category: "Trivia",
    question: "Where are you?",
    choices: ["Earth", "Moon", "Mars"],
    answer: "Earth",
  },
  {
    category: "Trivia",
    question: "What color are you?",
    choices: ["Black", "White", "Green"],
    answer: "White",
  },
  {
    category: "Trivia",
    question: "What color is the floor?",
    choices: ["Brown", "White", "Green"],
    answer: "Brown",
  }
];


// Get random question
function getRandomQuestion(arrayOfQuestions) {
  let randomNum = Math.floor(Math.random() * arrayOfQuestions.length);
  return arrayOfQuestions[randomNum];
}


// Get random choice
function getRandomComputerChoice(arrayOfChoices) {
  let randomNum = Math.floor(Math.random() * arrayOfChoices.length);
  return arrayOfChoices[randomNum];
}


// Check result
function getResults(question, choice) {
  if (choice === question.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
}
