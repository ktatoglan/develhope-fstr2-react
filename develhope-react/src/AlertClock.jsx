import React from "react";

function AlertClock({ onShowTime }) {
  return (
    <div>
      <button onClick={ onShowTime }>Show Current Time</button>
    </div>
  );
}

export default AlertClock;
