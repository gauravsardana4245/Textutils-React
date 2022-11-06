
import React, { useState } from 'react';
import Alert from './Alert';
import About from './About';
import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // withRouter
} from "react-router-dom";


function App() {
  const [mode,setMode]= useState("light")
  const [alert,setAlert]= useState(null)

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout( ()=> {
      setAlert(null)

  }, 1500);
  }
  // document.getElementsByClassName("exampleFormControlTextarea1").style.color = 'white';
  const removeBodyClasses= ()=> {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-info')
    document.body.classList.remove('bg-muted')
    document.body.classList.remove('bg-secondary')
  }

  const toggleMode= ()=>{
    // console.log(cls);
    // removeBodyClasses();
    // document.body.classList.add('bg-'+ cls)

    if(mode !== "dark") {
      setMode("dark");
      showAlert("Enabled dark mode", "success");
      document.body.style.backgroundColor = 'black';
      // document.getElementsByClassName("exampleFormControlTextarea1").style.backgroundColor = 'black';
      document.body.style.color= "white"
      // document.getElementsByClassName("exampleFormControlTextarea1").style.color = 'white';
      document.title="TextUtils - Dark Mode"
      // setInterval(() => {
      //   document.title= "TextUtils is amazing"
      // }, 2000);
      // setInterval(() => {
      //   document.title= "Install TextUtils Now"
      // }, 1500);


    }
    else {
      setMode("light");
      showAlert("Enabled light mode", "success");
      document.body.style.backgroundColor = 'white';
      document.body.style.color= "black"
      // document.getElementsByClassName("exampleFormControlTextarea1").style.backgroundColor = 'white';
      // document.getElementsByClassName("exampleFormControlTextarea1").style.color = 'black';
      // document.title="TextUtils - Light Mode"
      
    }
  }
  // const RedTheme = ()=> {
  //   if(mode !== 'red') {
  //     setMode("red");
  //     showAlert("Enabled red mode", "success");
  //     document.body.style.backgroundColor = '#4d1a00';
  //     // document.getElementsByClassName("exampleFormControlTextarea1").style.backgroundColor = '#4d1a00';
  //     document.body.style.color= "white"
  //     // document.getElementsByClassName("exampleFormControlTextarea1").style.color = 'white';
  //   }
  //   else {
  //     setMode("light");
  //     showAlert("Enabled light mode", "success");
  //     document.body.style.backgroundColor = 'white';
  //     // document.getElementsByClassName("exampleFormControlTextarea1").style.backgroundColor = 'white';
  //     document.body.style.color= "black"
  //     // document.getElementsByClassName("exampleFormControlTextarea1").style.color = 'black';
  //   }
  // }
  // const BlueTheme = ()=> {
  //   if(mode !== 'blue') {
  //     setMode("blue");
  //     showAlert("Enabled blue mode", "success");
  //     document.body.style.backgroundColor = '#001a33';
  //     // document.getElementsByClassName("exampleFormControlTextarea1").style.backgroundColor = '#001a33';
  //     document.body.style.color= "white"
  //     // document.getElementsByClassName("exampleFormControlTextarea1").style.color = 'white';
      
      
  //   }
  //   else {
  //     setMode("light");
  //     showAlert("Enabled light mode", "success");
  //     document.body.style.backgroundColor = 'white';
  //     // document.getElementsByClassName("exampleFormControlTextarea1").style.backgroundColor = 'white';
  //     document.body.style.color= "black"
  //     // document.getElementsByClassName("exampleFormControlTextarea1").style.color = 'black';

  //   }
  // }
  // const GreenTheme = ()=> {
  //   if(mode !== 'green') {
  //     setMode("green");
  //     showAlert("Enabled green mode", "success");
  //     document.body.style.backgroundColor = '#003300';
  //     // document.getElementsByClassName("exampleFormControlTextarea1").style.backgroundColor = '#003300';
  //     document.body.style.color= "white"
  //     // document.getElementsByClassName("exampleFormControlTextarea1").style.color = 'white';
      
  //   }
  //   else {
  //     setMode("light");
  //     showAlert("Enabled light mode", "success");
  //     document.body.style.backgroundColor = 'white';
  //     // document.getElementsByClassName("exampleFormControlTextarea1").style.backgroundColor = 'white';
  //     document.body.style.color= "black"
  //     // document.getElementsByClassName("exampleFormControlTextarea1").style.color = 'black';
  //   }
  // }


  

  
  // document.body.style.backgroundColor= mode==='red'?'red':'black';
  
  return (
   <div>
   <Router>
    {/* <Navbar title= "TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} RedTheme={RedTheme} BlueTheme={BlueTheme} GreenTheme={GreenTheme} /> */}
    <Navbar title= "TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}  />
    <Alert alert={alert} />
    <div className="container my-3" >
    <Switch >
          <Route path="/about">
            
            <About mode={mode} />
          </Route>
          <Route path="/">
          
    < TextForm heading= "Try TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode} toggleMode={toggleMode} showAlert={showAlert}  />
    

           </Route> 
        </Switch>
        </div>  
  

    

    </Router>
    </div>
   
  );
}

export default App;
