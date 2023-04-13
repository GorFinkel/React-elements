import "./index.css";
import React, { useState, useEffect } from "react";
import Popup from "./components/Popup";
import "./components/popup.css";

function App() {
  const [buttonPopUp, setbuttonPopUp] = useState(false);
  const [timedPopUp, setTimedPopUp] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimedPopUp(true);
    }, 3000);
  }, []);
  return (
    <div>
      <main>
        <h1>React Popup</h1>
        <button onClick={() => setbuttonPopUp(true)}>Open Popup</button>
      </main>
      <Popup trigger={buttonPopUp} setTrigger={setbuttonPopUp}>
        <h3>My popup</h3>
        <h5>This is my button triggered popup</h5>
      </Popup>

      <Popup trigger={timedPopUp} setTrigger={setTimedPopUp}>
        <h3>My popup</h3>
        <h5>This is my button triggered popup</h5>
      </Popup>

      <h1></h1>
    </div>
  );
}

export default App;
