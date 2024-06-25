import { createContext, useContext} from "react"
import useQuestions from "../hooks/useQuestions";


const QuizContext=createContext();

function ContextProvider({children}) {

const [{questions,status,index,answer,points,highscore,secondsRemaining,numQuestions,maxPossiblePoints},dispatch]=useQuestions();







    return (
        <QuizContext.Provider value={{questions,dispatch,status,index,answer,points,highscore,secondsRemaining,numQuestions,maxPossiblePoints}}>
            {children}
        </QuizContext.Provider>
    )
}


function useQuiz() {

    const context=useContext(QuizContext);
    return context
    
}


export {ContextProvider,useQuiz}
