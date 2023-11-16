import React, { useState } from 'react';
import { LanguageContext, Clock } from './Clock'; // Adjust the path as needed

const App = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('tr-TR');

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  return (
    <div>
      <h1>Language Selector</h1>
      <label htmlFor="languageSelect">Select Language: </label>
      <select id="languageSelect" onChange={handleLanguageChange} value={selectedLanguage}>
        <option value="tr-TR">Turkish</option>
        <option value="en-US">English</option>
        <option value="es-ES">Spanish</option>
      </select>

      <LanguageContext.Provider value={{ language: selectedLanguage }}>
        <Clock />
      </LanguageContext.Provider>
    </div>
  );
};

export default App;
