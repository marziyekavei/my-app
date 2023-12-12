import React, {useState} from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

function Question({title, answer}) {

const [showAnswer, setShowAnswer] = useState(false);

const handelClick = () =>{
    setShowAnswer(!showAnswer);
}

  return (
    <div className='container  question' >
            <div className='question-title'>
              <h4>{title}</h4>
              <button onClick={handelClick}> 
              {
          showAnswer ? 
          <AiOutlineMinus color='#1f93ff'/> 
          
          :
          <AiOutlinePlus color='#1f93ff'/> 
           
        }
              
              </button>
            </div>
            <div className='qestion-answer'>
              {
                showAnswer && <p>{answer}</p>
              }
            </div>
          </div>
  )
}

export default Question