import React, { useState, useEffect } from 'react';
export const CountryData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchCountryData() {
      try {
        const res = await fetch('https://restcountries.com/v2/all');
        const data = await res.json();
        setData(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchCountryData();
  }, []);
  return { data };
};
