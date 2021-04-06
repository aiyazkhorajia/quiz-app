import { SET_NEXT_QUESTION, GET_RESULT, SET_ACTIVE_OPTION } from './constants';

const questionData = [
  {
      question: "Find the logo that doesn't manufacture a car?",
      options: [
          "hyundai.png",
          "honda.png",
          "ea.png",
          "mercedes.png"                
      ],
      answer: "ea.png"
  },
  {
      question: "Find the logo of twitter?",
      options: [
          "google.png",
          "twitter.png",
          "instagram.png",
          "lmo.png"                
      ],
      answer: "twitter.png"
  },
  {
      question: "Windows operating system is the product of following company?",
      options: [
          "microsoft.png",
          "apple.png",
          "yahoo.png",
          "facebook.png"                
      ],
      answer: "microsoft.png"
  },
  {
      question: "Find the Jamaican athlete?",
      options: [
        "ronaldo.png",
        "yohan.png",
        "kylian.png",
        "neymar.png"                
      ],
      answer: "yohan.png"
  },
  {
    question: "Following charactor doesn't belong to Marvel movie series?",
    options: [
      "superman.png",
      "captain-america.png",
      "ironman.png",
      "batman.png"                
    ],
    answer: "batman.png"
  },
  {
    question: "Find the flag of greece?",
    options: [
      "greece.png",
      "austria.png",
      "australia.png",
      "taiwan.png"                
    ],
    answer: "greece.png"
  },
  {
    question: "Who scored fastest 100 in test cricket?",
    options: [
      "gayle.jpg",
      "abd.jpg",
      "yuvraj.jpg",
      "brendon.jpg"                
    ],
    answer: "brendon.jpg"
  }
];

const getShuffledArr = arr => {
  const newArr = arr.slice()
  for (let i = newArr.length - 1; i > 0; i--) {
      const rand = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
  }
  return newArr
};

const shuffledQuestion = getShuffledArr(questionData);

const initialState = {
    questions: shuffledQuestion,
    visibleQuestion: shuffledQuestion[0],
    visibleQuestionIndex: 0,
    activeOption: undefined,
    isCompleted: false,
    result: []
  }
  
function appReducer(state = initialState, action) {
    switch (action.type) {
      case SET_NEXT_QUESTION: {
        return {
          ...state,
          result:  state.result.concat(action.answer),
          visibleQuestionIndex: state.visibleQuestionIndex + 1,
          visibleQuestion: state.questions.find((q, index) => index === (state.visibleQuestionIndex + 1) )
        };
      }
      case SET_ACTIVE_OPTION: {
        return {
          ...state,
          activeOption: action.option
        };
      }
      case GET_RESULT: {
        return {
          ...state,
          result:  state.result.concat(action.answer),
          isCompleted: true
        };
      }
      default:
        return state
    }
}

export default appReducer;