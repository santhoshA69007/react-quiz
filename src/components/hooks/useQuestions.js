import { useEffect, useReducer } from "react";



const SECS_PER_QUES=30;
const intialState={
  questions:[],
  status:"loading",
  index:0,
  answer:null,
  points:0,
  highscore:0,
  secondsRemaining:10,
}




function reducer(state,action) {
    switch(action.type){
      case "dataRecieved":
        return {...state,
          questions:action.payload,
          status:"ready"
        };
  
      case "dataFailed":
        return{...state,status:"error"}
  
      case "start":
        return{...state,status:"active",secondsRemaining:state.questions.length*SECS_PER_QUES}
      case "newAnswer":
        const question=state.questions.at(state.index);
        return{...state,answer:action.payload,points:action.payload===question.correctOption?state.points+question.points:state.points}
      case "nextQuestion":
        return{...state,index:state.index + 1,answer:null}
        case "finished":
          return{...state,status:"finished",highscore:state.points>state.highscore?state.points:state.highscore}
  
       case "reset":
         return{...intialState,status:"ready",questions:state.questions};
        case "tick":
          return{...state,secondsRemaining:state.secondsRemaining-1,status:state.secondsRemaining===0?"finished":state.status}
         
  
      default:
         throw new Error("Action unknown")
  
    }
    
  }
 





function useQuestions() {
const [{questions,status,index,answer,points,highscore,secondsRemaining},dispatch]=useReducer(reducer,intialState);
const numQuestions=questions.length;
const maxPossiblePoints=questions.reduce((prev,cur)=>prev+cur.points,0);

useEffect(function(){
  fetch("http://localhost:8000/questions")
  .then(res=>res.json())
  .then((data)=>dispatch({type:"dataRecieved",payload:data}))
  .catch(dispatch({type:"dataFailed"}))
},[dispatch]);

    return {questions,status,index,answer,points,highscore,secondsRemaining,numQuestions,maxPossiblePoints,dispatch}
}

export default useQuestions
