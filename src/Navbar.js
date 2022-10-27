import React from 'react'
// import PropTypes from 'prop-types'
import "./Navstyle.css";
import {
  // withRouter,
  // Link
} from "react-router-dom";



export default function Navbar(props) {
  // let mystyle= {
  //   display: "flex",
  
  // }
  
    return (
        <nav className={`navbar navbar-expand-lg bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`}>
  <div className="container-fluid" >
    <a className={`navbar-brand text-${props.mode==='light'?'dark':'light'}`} href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className={`nav-Link active" aria-current="page  text-${props.mode==='light'?'dark':'light'}`} href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className={`nav-Link active" aria-current="page  text-${props.mode==='light'?'dark':'light'}`} href="/about">{props.aboutText}</a>
        </li>
        
          </ul >
          <div className="btn-group" role="group" aria-label="Basic mixed styles example">
           <span> Choose Theme: </span>
  <button type="button" className="btn" id="rTheme" onClick={props.RedTheme}></button>
  <button type="button" className="btn" id='bTheme' onClick={props.BlueTheme}></button>
  <button type="button" className="btn" id='gTheme' onClick={props.GreenTheme}></button>
</div>

          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
</div>
    </div>
  </div>
  
</nav>
    )
// }
// Navbar.propTypes = {
//     title: PropTypes.string.isRequired,
//     aboutText: PropTypes.string.isRequired
// }
// Navbar.defaultProps= {
//     title: "This is title",
//     aboutText: "about Text"
}