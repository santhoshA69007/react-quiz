import { useQuiz } from "./context/ContextProvider";

function NextButton() {
      const {dispatch,answer,numQuestions,index} =useQuiz();
 
if(answer === null) return null;


if(index<numQuestions-1) 
    return (<button className="btn btn-ui" onClick={()=>dispatch({type:"nextQuestion"})}>next</button>
)
if(index===numQuestions-1) 
    return (<button className="btn btn-ui" onClick={()=>dispatch({type:"finished"})}>Finish</button>
)

      
    
}

export default NextButton;
