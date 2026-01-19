import React from "react";

const SecondsCounter = ({ seconds }) => {
  
  const secondsStr = seconds.toString().padStart(6, '0');
  
  return (
    <div className="d-flex justify-content-center align-items-center my-4">
      <div className="fs-1 bg-dark text-white p-3 rounded mx-1">
        <i className="fas fa-clock"></i>
      </div>
      {secondsStr.split('').map((digit, index) => (
        <div 
          key={index} 
          className="fs-1 bg-dark text-white p-3 rounded mx-1"
          style={{ minWidth: '60px', textAlign: 'center' }}
        >
          {digit}
        </div>
      ))}
    </div>
  );
};

export default SecondsCounter;