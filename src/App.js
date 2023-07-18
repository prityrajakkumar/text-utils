
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const[alert, setAlert] = useState(null);

   const showAlert = (massage, type)=>{
    setAlert({
      msg: massage,
      type: type
    })
    setTimeout(() => {
      setAlert(null);

    }, 1500);
   }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enable", "success");
      document.title = 'TextUtile - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable", "success");
      document.title = 'TextUtile - Light Mode';
    }
  }
  return (
    <>
    {/*<Navbar title="TextUtils2" aboutText="About TextUtils"/>*/}
    {/*<Navbar/>*/}
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my=8">
    <Routes>
         <Route path="/about"element={<About/>}/>
          <Route path="/"element={
           <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} 
          />
      </Routes>
      </div>
      </Router>
      </>  
     
  );
}

export default App;
