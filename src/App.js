import React, {useState} from 'react'
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');

  //const [textMode, setTextMode] = useState('dark')

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      // document.title = 'TextUtils - Light Mode';
      //setTextMode('dark');
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = '#050c24';
      showAlert("Dark mode has been enabled", "success");
      // document.title = 'TextUtils - Dark Mode';
      //setTextMode('light');
    }
  }
  

  return (
    <>
    <Router>
      <Navbar title="TextUtils" aboutText="About Us" theme={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <TextForm showAlert={showAlert} heading="Enter your text below to analyze" theme={mode}/> */}
        <Routes>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove Extra spaces" theme={mode}/> } />
            <Route exact path="/about" element={<About theme={mode}/>} />
        </Routes>
        
      </div>
    </Router>
    </>
  );
}

export default App;
