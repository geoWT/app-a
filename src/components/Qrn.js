import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuranPage = () => {
  const [quranData, setQuranData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/quran_en.json'); // Replace with the actual Quran API URL
        setQuranData(response.data[0]); // Assuming the first verse is at index 0
      } catch (error) {
        console.error('Error fetching Quran data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>{quranData.name}</h1>
      <p>{quranData.transliteration}</p>
      <p><i>{quranData.translation}</i></p>
      <br></br>
      <p>Text should go here.</p>
    </>
  );
};

export default QuranPage;