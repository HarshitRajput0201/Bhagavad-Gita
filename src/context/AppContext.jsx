// AppContext.js
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const baseUrl = 'https://bhagavadgita.onrender.com/api/v1/';

  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sloks, setSloks] = useState([]);
  const [chapter, setChapter] = useState([]);

  const fetchData = async (chapterNumber = null, slokNumber = null) => {
    setLoading(true);

    let chaptersUrl = `${baseUrl}/chapters`;
    let chapterUrl = null;
    let slokUrl = null;

    if (chapterNumber) {
      chapterUrl = `${baseUrl}/chapter/${chapterNumber}`;
    }

    if (slokNumber) {
      slokUrl = `${baseUrl}/slok/${chapterNumber}/${slokNumber}`;
    }

    try {
      await axios
      .get(chaptersUrl)
      .then((chaptersData) => {
        setChapters(chaptersData.data);
      })
      .catch((error) => console.log(error));

      if (chapterUrl) {
        await axios
        .get(chapterUrl)
        .then((chapterData) => {
          setChapter(chapterData.data);
        })
        .catch((error) => console.log(error));
      }

      if (slokUrl) {
        await axios
        .get(slokUrl)
        .then((slokData) => {
          setSloks(slokData.data);
        })
        .catch((error) => console.log(error));
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setChapters([]);
      setChapter(null);
      setSloks([]);
    } 
    finally {
      setLoading(false);
    }
  };

  const value = {
    chapters,
    chapter,
    sloks,
    loading,
    fetchData,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
