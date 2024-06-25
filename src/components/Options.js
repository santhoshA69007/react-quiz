import { useQuiz } from "./context/ContextProvider";

function Options() {
    const {question,dispatch,answer}=useQuiz();
    const hasAnswered=answer!==null;
    return (
        <div>
           {question.options.map((option,index)=><button onClick={()=>dispatch({type:"newAnswer",payload:index})} className={`btn btn-option ${index===answer? 'answer' :""} ${hasAnswered?index===question.correctOption?"correct":"wrong":""}`} disabled={hasAnswered}>{option}</button>)}
        </div>
    )
}

export default Options
  