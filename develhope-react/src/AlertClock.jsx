import React from "react";

function AlertClock() {
  const showCurrentTime = () => {
    const currentTime = new Date().toLocaleTimeString();
    alert(`Current time is: ${currentTime}`);
  };

  return (
    <div>
      <button onClick={showCurrentTime}>Show Current Time</button>
    </div>
  );
}

export default AlertClock;
