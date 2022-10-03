import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './style.css';

function App() {
  const [data, setData] = useState('');
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/comments')
      .then((response) => {
        setData(response.data[0].email);
        console.log('its working');
      });
  }, []);
  return (
    <div>
      <h1>mani</h1>
      <h2>hello {data}</h2>
    </div>
  );
}
export default App;
