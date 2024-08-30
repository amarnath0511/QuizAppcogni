import React, { useState, useEffect } from 'react'
import { QuestionData } from '../Data/QuestionData'
import QuizResult from './QuizResult';
function Quiz() {
    const [currentQuestion,setCurrentQuestion]=useState(0);
    const [score,setScore] = useState(0);
    const [clickedOption,setClickedOption]=useState(0);
    const [showResult,setShowResult]=useState(false);
    const [statusResult,setStatusResult]=useState(false);

    useEffect(() => {
        if(clickedOption !== 0){
        clickedOption== QuestionData[currentQuestion].answer ? setStatusResult("Correct Answer") : setStatusResult("Worng Answer");
        }
      }, [clickedOption]);

    // const [isDisabled, setDisabled] = useState();
    
    const changeQuestion = ()=>{
        updateScore();
        if(currentQuestion< QuestionData.length-1){
            setCurrentQuestion(currentQuestion+1);
            setClickedOption(0);
            setStatusResult()
         
        }       
        else{
            setShowResult(true)
        }
    }
    const updateScore=()=>{
        if(clickedOption===QuestionData[currentQuestion].answer){
            setScore(score+1);
        }
    }
    const resetAll=()=>{
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOption(0);
        setScore(0);
    }
    // const test=()=>{
    // //    console.log( clickedOption === QuestionData[currentQuestion].answer)
    // //    let anwcheck = QuestionData[currentQuestion].answer
    //     if(clickedOption ===QuestionData[currentQuestion].answer){
    //         alert("true")
    //     }
    //     else{
    //         alert("fasle")
    //     }
    // }
  return (
    <div>
        <p className="heading-txt">Quiz APP</p>
        <div className="container">
            {showResult ? (
                <QuizResult score={score} totalScore={QuestionData.length} tryAgain={resetAll}/>
            ):(
            <>
             <span className={`nopadding ${
                               clickedOption== QuestionData[currentQuestion].answer ?  "correct" : "worng"
                            }`}>{statusResult}</span>
            <div className="question">
                <span id="question-number">{currentQuestion+1}. </span>
                <span id="question-txt">{QuestionData[currentQuestion].question}</span>
               
            </div>
            <div className="option-container">
                {QuestionData[currentQuestion].options.map((option,i)=>{
                    return(
                        <button                         
                        className={`option-btn ${
                            // clickedOption == i+1?"checked":null
                           
                            clickedOption == i+1
                            ?
                            `${
                               clickedOption== QuestionData[currentQuestion].answer ?  "checked" : "noncorrect"
                            }`
                            :
                            null
                        }`}
                        key={i}
                        onClick={()=>setClickedOption(i+1)
                            // onClick={()=>test()
                        }
                        >
                          
                        {option}
                        </button>
                    )
                })}                
            </div>
            <input type="button" value="Next" id="next-button"  onClick={changeQuestion}/>
            </>)}
        </div>
    </div>
  )
}

export default Quiz