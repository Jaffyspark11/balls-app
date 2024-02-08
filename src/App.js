import React, { useEffect, useState } from 'react';
import './App.css';
import StartupScreen from './components/StartupScreen';
import bigBalls from './assets/bigBalls.png';

function App() {

  const [startup, setStartup] = useState(true)
  const [totalScratches, setTotalScratches] = useState(() => {
    const storedCounter = localStorage.getItem('totalScratches');
    return storedCounter ? parseInt(storedCounter, 10) : 0;
  });

  const scratch = () => {
    setTotalScratches(totalScratches + 1)
  }

  useEffect(() =>{
  localStorage.setItem("totalScratches", JSON.stringify(totalScratches))

}
  ,[totalScratches])

  return (
    <div className='app'>
      {startup && <StartupScreen setStartup={setStartup}/>}

      {!startup && (
        <>
          <h1>Itch 'Em!!</h1>
          <button className='big-balls' onClick={scratch}>
            <img src= {bigBalls} alt='Balls' ></img>
          </button>
          <h2>Total Scratches: {totalScratches}</h2>

        
        </>
      )}

    </div>
  );
}

export default App;
