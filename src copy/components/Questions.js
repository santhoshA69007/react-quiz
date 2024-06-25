import Option from  "./Options"

function Questions({question,dispatch,answer}) {



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
