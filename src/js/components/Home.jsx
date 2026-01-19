import React, { useState, useEffect } from "react";
import SecondsCounter from "./SecondsCounter";

const Home = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  return (
    <div className="text-center mt-5">
      <h1>Contador de Segundos</h1>
      <SecondsCounter seconds={seconds} />
      
      <div className="mt-3">
        <button 
          className="btn btn-primary mx-2"
          onClick={() => setIsRunning(!isRunning)}
        >
          {isRunning ? 'Pausar' : 'Reanudar'}
        </button>
        
        <button 
          className="btn btn-danger mx-2"
          onClick={() => setSeconds(0)}
        >
          Reiniciar
        </button>
      </div>
      
      <p className="mt-3">Segundos: {seconds}</p>
    </div>
  );
};

export default Home;