import { createContext, useReducer} from "react";
import questions from "../data/questions";


const STAGES = ["Start", "Playing", "End"];

const initialState = {
    gameStage: STAGES[0],
    questions,
    currentQuestion: 0,
   answerSelected: false,


};

const quizReducer = (state, action) =>{
    switch(action.type){
        case "CHANGE_STATE":
            return {
                ...state,
                gameStage: STAGES[1],
                
            };
         
      
      
      
            case "CHANGE_QUESTION":

            const nextId = state.nextId;
            let endGame = false;


            if(!questions[nextId]){
                endGame = true;
            };
      
            return {
              ...state,
              currentQuestion: nextId,
              answerSelected: false, 
              gameStage: endGame ? STAGES[2] : state.gameStage,
            };


            case "CHECK_NEXT":
                return {
                  ...state,
                  nextId: action.payload.nextId, 
                  answerSelected: true, 
                };
          

           
        
        
      default:
        return state;  
    }
};


export const QuizContext = createContext();

export const QuizProvider = ({children}) =>{
    const value = useReducer(quizReducer, initialState);

    return <QuizContext.Provider value={value}>
        {children}
    </QuizContext.Provider>
}