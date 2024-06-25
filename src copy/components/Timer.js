import { useEffect } from "react"


function Timer({status,dispatch,secondsRemaining}) {
    const mins=Math.floor(secondsRemaining/60);
    const seconds=secondsRemaining%60;
useEffect(function(){

    const id=setInterval(function(){
     dispatch({type:"tick"})
    },1000)

    return ()=> clearInterval(id);

    

},[dispatch])


    return (
        <div className="timer"> 
         0{mins}:{seconds}
        </div>
    )
}

export default Timer
