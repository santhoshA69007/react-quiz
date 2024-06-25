import { useReducer} from "react";



function reducer(state,action){

  console.log(`intialState: ${state} and action: ${action}`);
  switch(action.type){
    case "inc":
      return {...state,count:state.count+state.step}
    case "dec":
      return {...state,count:state.count+state.step}
    case "setCount":
      return {...state,count:action.payload}
    case "setSlide":
      return {...state,step:action.payload}
      case "reset":
        return {...state,step:1,count:0}
    default:
      return "unknown action da"
  }

}

function DateCounter() {
  //const [count, setCount] = useState(0);
const intialState={
  count:1,
  step:1
}

  const [count,dispatcher] = useReducer(reducer,intialState);



 

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(count.count?date.getDate() + count.count:date.getDate()+count.step);

  const dec = function () {
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
    dispatcher({type:"dec",payload:-1})
  };

  const inc = function () {
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
    dispatcher({type:"inc",payload:1})
  
  };

  const defineCount = function (e) {
    // setCount(Number(e.target.value));
    dispatcher({type:"setCount",payload:Number(e.target.value)})

  };

  const defineStep = function (e) {
    dispatcher({type:"setSlide",payload:Number(e.target.value)})
  };

  const reset = function () {
    // setCount(0);
    dispatcher({type:"reset",payload:1})
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={count.step}
          onChange={defineStep}
        />
        <span>{count.step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count.count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
