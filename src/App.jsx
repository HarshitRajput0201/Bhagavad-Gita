// App.jsx
import React, { useContext, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ChapterPage from './pages/ChapterPage';
import SloksPage from './pages/SloksPage';
import { AppContext } from './context/AppContext';
import './App.css';

const App = () => {

const { fetchData } = useContext(AppContext);
const location = useLocation();

useEffect(() => {
 
  if (location.pathname.includes("slok") && location.pathname.includes("chapter")) {
    const slokNumber = location.pathname.split("/").at(-1);
    const chapterNumber = location.pathname.split("/").at(-3); 
    fetchData(chapterNumber, slokNumber);
  }
  else if (location.pathname.includes("chapter")) {
    const chapterNumber = location.pathname.split("/").at(-1);
    fetchData(chapterNumber);
  }
   
  else {
    fetchData();
  }

},[location.pathname]);

  return (
    <div className='app'>
      <Routes>
        <Route path="/Bhagavad-Gita/" element={<HomePage />} />
        <Route path="/chapter/:ch" element={<ChapterPage />} />
        <Route path="/chapter/:ch/slok/:sl" element={<SloksPage/>} />
      </Routes>
    </div>
  );

        
};

export default App;
