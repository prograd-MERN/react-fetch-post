import React from 'react'
import axios from 'axios'

const FetchComponent = () => {

    const fetchData = async () => 
    {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();  
        console.log(data)   
    }
    
  return (
    <React.Fragment>
        <button id='Fetch-button' onClick={fetchData}>Fetch User Data</button>
    </React.Fragment>
  )
}

export default FetchComponent