
import './App.css';



 import About from './components/About';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

 const showAlert = (message, type) =>{
    setAlert({
        message: message,
        type: type
    })

    setTimeout(() =>{
      setAlert(null)
    },1500);
 }

  const toggleMode = ()=>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
  
    <BrowserRouter>
   <Navbar title = "TextUtils" aboutText = "About" mode={mode} toggleMode={toggleMode}/>
   <Alert  alert={alert}/>
   <div className='container my-3'>
    <Routes>
      <Route path='/' element={<TextForm  showAlert={showAlert} heading="Enter the Text to Analyze Below" mode={mode}/>}/>
     
      
      <Route path='/About'  element={<About mode={mode}/>}/>
      
      
   </Routes>
   </div>
   </BrowserRouter>
  
  );
}

export default App;
