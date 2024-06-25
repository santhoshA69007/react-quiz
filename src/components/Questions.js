import Option from  "./Options"
import { useQuiz } from "./context/ContextProvider"

function Questions() {

const {question,dispatch,answer}=useQuiz();

    return (
        <div>
     
            <h4>{question.question}</h4>

            <div className="options">

           <Option dispatch={dispatch} answer={answer} question={question} />
      

            </div>

        </div>
    )
}

export default Questions
