import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import CardComponent from '../../components/Cards/Cards'; 

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://cloud.codesupply.co/endpoint/react/data.json');
        setCards(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar setSearchQuery={setSearchQuery} />
      <CardComponent cards={cards} searchQuery={searchQuery} />
    </div>
  );
};

export default HomePage;
