import {React, createContext, useState } from 'react';

const DiaryContext = createContext();

const DiaryProvider = ({ children }) => {
  const [diaryEntries, setDiaryEntries] = useState([]);

  const addDiaryEntry = (entry) => {
    setDiaryEntries(currentEntries => [...currentEntries, entry]);
  };

  return (
    <DiaryContext.Provider value={{ diaryEntries, addDiaryEntry }}>
      {children}
    </DiaryContext.Provider>
  );
};

export { DiaryContext, DiaryProvider };
