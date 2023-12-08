import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';
// import {
//     BrowserRouter,
//     Routes,
//     Route,
// } from "react-router-dom";

function App() {

    const [mode, setMode] = useState('light');
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type)=>{
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(()=>{
            setAlert(null);
        }, 1500);
    }

    const tooglemode = ()=>{
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = 'grey';
            showAlert("Dark mode is enabled", "success");
            document.title = 'TextUtils - Dark Mode';
        }
        else{
            setMode('light');
            document.body.style.backgroundColor = 'white';
            showAlert("Light mode is enabled", "success");
            document.title = 'TextUtils - Light Mode';
        }
    }

    return ( 
    <>
        {/* <BrowserRouter> */}
        <Navbar title="TextUtils" mode={mode} tooglemode={tooglemode} />
        <Alert alert={alert}/>
        <div className="container my-3">
            
            {/* <Routes>
                <Route exact index element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>} />
                <Route exact path="/about" element={<About />} />
            </Routes> */}

            <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
        
        {/*  */}
        {/* <About /> */}
        </div>
        {/* </BrowserRouter> */}
    </>
        
    );
}

export default App;