import React, { useState } from 'react';
import axios from 'axios';

const FetchComponent = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      console.log(response.data);
      setData(response.data);
  };

  return (
    <React.Fragment>
      <div id='api-data'>
        {data.map(post => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
      <button id='Fetch-button' onClick={fetchData}>
        Fetch User Data
      </button>
    </React.Fragment>
  );
};

export default FetchComponent;
