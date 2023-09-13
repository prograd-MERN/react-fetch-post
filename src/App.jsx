import React from 'react'
import './App.css'
import FetchComponent from './components/FetchComponent/FetchComponent'
import TitleComponent from './components/TitleComponent/TitleComponent'
function App() {
  return (
    <React.Fragment> 
        <TitleComponent/>
        <FetchComponent/>   
    </React.Fragment>
  )
}

export default App
