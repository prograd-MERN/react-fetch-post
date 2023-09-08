import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [userDetails, setUserDetails] = useState([]);

  const fetchUserDetails = () => {
    setCurrentIndex(prevIndex => prevIndex + 1);
    const response = axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setUserDetails(response.data);
        setCurrentIndex(0);
      })
      .catch(error => {
        console.error('Error fetching user details:', error);
      });
  }

  const displayUserDetail = () => {
    if (currentIndex !== null && currentIndex < userDetails.length) {
      const user = userDetails[currentIndex];
      return (
        <div>
          <h2>{user.name}</h2>
          <p>Id  : {user.id}</p>
          <p>Title  : {user.title}</p>
          <p>Body  : {user.body}</p>
        </div>
      );
    } else {
      return null;
    }
  }

  const nextUser = () => {
    setCurrentIndex(prevIndex => prevIndex + 1);
  }

  return (
    <React.Fragment>
      <div id='details-api'>
      <button id='button-fetch-details' onClick={fetchUserDetails}>Fetch User Details</button>
       
            <div id='details'>{displayUserDetail()}</div>    
        {
          currentIndex !== null && currentIndex < userDetails.length - 1 &&
          <button id='button-nextuser' onClick={nextUser}>Click Here For Next Details</button>
        }
      </div>
      <div class="footer">Created by Bala</div>
    </React.Fragment>
  );
}

export default App;
