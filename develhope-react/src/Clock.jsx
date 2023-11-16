import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

const Clock = () => {
  const { language } = useContext(LanguageContext);
  const [time, setTime] = useState(new Date());

  // Function to update time every second
  useState(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedTime =
    language === 'en-US'
      ? time.toLocaleTimeString('tr-TR')
      : time.toLocaleTimeString('en-US');

  return <div>Current Time: {formattedTime}</div>;
};

export { LanguageContext, Clock };
