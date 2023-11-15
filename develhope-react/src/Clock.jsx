import React, { useState, useEffect } from 'react';
import './Clock.scss';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="clock">
      <p className="time">{time.toLocaleTimeString()}</p>
    </div>
  );
};

export default Clock;
