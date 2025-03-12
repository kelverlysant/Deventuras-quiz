import Guilda from "../img/guilda.png"

import "./Questions.css"


import { MdNavigateNext } from "react-icons/md";


import { QuizContext } from "../context/quiz";
import { useContext } from "react";
import Option from "./Option";

const Questions = () => {
  const [quizState, dispatch] = useContext(QuizContext)
    
  const currentQuestion = quizState.questions[quizState.currentQuestion]

  const onSelectOption = (option, next) =>{
    dispatch({
      type: "CHECK_NEXT",
      payload: { nextId: option.next }, 
    });
  }

  return (
    <div id="question">
          <div>
            <img src={Guilda} alt="" />
          </div>

        <div className="question-container">
          <div className="box">
            <h2>Mestre da Guilda:</h2>
            <p>{` ${currentQuestion.question}`}</p>
          </div>
          <div id="options">
          {currentQuestion.options.map((option, index) =>(
              <Option 
              text={option.text}
              selectOption={()=> onSelectOption(option)}
           />
            ))}
          </div>
         
        {
          quizState.answerSelected && (
            <button onClick={() => dispatch({ type: "CHANGE_QUESTION"})}>
            <MdNavigateNext />
            </button>
          )
        }
        </div>

    </div>
  )
}

export default Questions