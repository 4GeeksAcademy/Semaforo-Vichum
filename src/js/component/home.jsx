import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Home() {
  const [color, setColor] = useState("red");

  return (
    <div id="semaforo">
      <div id="container">
        <div 
          className={`red light ${color === "red" ? "active" : ""}`} 
          onClick={() => setColor("red")}>
        </div>
        <div 
          className={`yellow light ${color === "yellow" ? "active" : ""}`} 
          onClick={() => setColor("yellow")}>
        </div>
        <div 
          className={`green light ${color === "green" ? "active" : ""}`} 
          onClick={() => setColor("green")}>
        </div>
      </div>
    </div>
  );
}



export default Home;
