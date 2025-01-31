import { useQuiz } from "./context/ContextProvider";

function Progress() {
    const {index,numQuestions,points,maxPossiblePoints,answer}=useQuiz();
    return (
        <header className="progress">

        <progress max={numQuestions} value={index+Number(answer!==null)} />


            <p>
                Question <strong>{index+1}</strong>/{numQuestions}
            </p>



            <p>{points}/{maxPossiblePoints}</p>
        </header>
    )
}

export default Progress
