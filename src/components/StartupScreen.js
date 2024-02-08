import { useState } from 'react';
import '../App.css'


export default function StartupScreen({setStartup}) {
    const [incorrectAnswer, setIncorrectAnswer] = useState(false)


    const onYes = () => {
        setStartup(false)
    }
    const onNo = () => {
        setIncorrectAnswer(true)
    }

    return(
    <div>
      {/*Options*/}
      {incorrectAnswer && (<h1>Stop lying to yourself. Try again.</h1>)}
      <h1>Do Your Balls Itch?</h1>
      <button onClick={onYes}>Yes</button>
      <button onClick={onNo}>No</button>

      {/*Stats and Shit*/}

    </div>
    )



}