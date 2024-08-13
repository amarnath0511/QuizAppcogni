import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
}from 'chart.js';

import {Pie} from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function QuizResult(props) {

  const data={
    labels : [' Your Score', 'Total Score'],
    datasets: [
      {
        data: [props.score, (props.totalScore - props.score)],
        backgroundColor: ['Green', 'red']
      }
    ]
  };
  const options ={

  }
  return (
    <>
    <div className='show-score'>
        Your Score:{props.score}<br/>
        Total Score:{props.totalScore}
    </div>
    <button id="next-button" onClick={props.tryAgain}>Try Again</button>
    
    <div
       style={
        {
          padding: '30px',
          width: "50%",    position: "absolute",
          top: "0"
        }
       }
    >
      <Pie
        data= {data}
        options = {options}
      >

      </Pie>
    </div>

    </>
   
    
  )
}

export default QuizResult