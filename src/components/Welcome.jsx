import "./Welcome.css"
import { HiMiniPlay } from "react-icons/hi2";


import { QuizContext } from "../context/quiz";
import { useContext } from "react";

const Welcome = () => {

  const [quizState, dispatch] = useContext(QuizContext);



  return (
    <div id="welcome">
         <h2>Seja Bem-Vindo</h2>
        <p>Clique no botão abaixo para começar:</p>
        <button onClick={() => dispatch({type: "CHANGE_STATE"})}> 
        <HiMiniPlay />
        </button>
    </div>
  )
}

export default Welcome