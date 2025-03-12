import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import "./Option.css";

const Option = ({text, selectOption, next}) => {

    const [quizState, dispatch] = useContext(QuizContext)

  return (
    <div>
        <div onClick={()=>  selectOption(next)}>
           <p>{text}</p>
        </div> 
    </div>
  )
}

export default Option