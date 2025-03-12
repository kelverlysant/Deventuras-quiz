import './App.css'
import Welcome from './components/Welcome'
import Questions from './components/Questions';
import EndGame from './components/EndGame'


import { useContext } from 'react';
import { QuizContext } from './context/quiz';
import { GiAncientSword } from "react-icons/gi";




function App() {
  
   const [quizState, dispatch] = useContext(QuizContext);
   


  return (
    
     <div className='app'>
        <h1>DEVenturas<GiAncientSword /></h1>

        {quizState.gameStage === "Start" && <Welcome/>} 
        {quizState.gameStage === "Playing" && <Questions />}
        {quizState.gameStage === "End" && <EndGame />}
     </div> 
   
  )
}

export default App