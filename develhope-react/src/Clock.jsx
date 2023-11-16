import React, { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();
const Clock = () => {
  const { language } = useContext(LanguageContext);
  const [time, setTime] = useState(new Date());

  // Function to update time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedTime =
    language === "tr-TR"
      ? time.toLocaleTimeString("tr-TR")
      : time.toLocaleTimeString("en-US");

  const currentTimeMessage = language === "tr-TR" ? "Saat: " : "Current Time:";

  return (
    <div>
      <p>
        {currentTimeMessage} {formattedTime}
      </p>
    </div>
  );
};

export { LanguageContext, Clock };
