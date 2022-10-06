import React, { useState } from "react";

const App = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString("en-GB"));
  const getTime = () => {
    setTime(new Date().toLocaleTimeString("en-GB"));
  };
  setInterval(getTime, 1000);
  return (
    <div className="container">
      <h1>{time}</h1>
      {/* <button onClick={getTime}>Get Time</button> */}
    </div>
  );
};

export default App;
