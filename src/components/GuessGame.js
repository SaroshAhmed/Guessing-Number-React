import React, {useState} from 'react'
import '../App.css';

export default function GuessGame() {
    const [value, setValue] = useState(0)
    const [ranNum, setRanNum] = useState(0)
    const[disMsg, setDisMsg] = useState(' Guess Me ')
    const[content, setContent] = useState(false)
    const[start, setStart] = useState(true)

    function handleMathRandom(){
        setRanNum(Math.floor(Math.random()*10)+1)
        setContent(true)
        setStart(false)
    }

    function handleSubmit(){
       if(parseInt(value)===ranNum){
        
        setDisMsg('You Got it! Number is  '+ranNum)
       }
        else{
            setDisMsg('Incorrect')
        }
       }
  return (
    <div className='container'>
        <h1>GUESS THE NUMBER</h1>
        {start&&<button onClick={handleMathRandom} className='start'>Play</button>}
        {content&&<input type='number' className='inputText' maxLength='2' onChange={(e)=>{setValue(e.target.value)}}></input>}
        {content&&<button className='submit' onClick={handleSubmit}>Submit</button>}
        {content&&<p className='showResult'>{disMsg}</p>}
    </div>
  )
}
