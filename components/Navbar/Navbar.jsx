import React from 'react'
import NeaImg from "./neaIcon2.png"
import "./navbar.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
  return (
      <div className="navbar">
        <div className="navbar-left">
          <img className="navbar-img" src={NeaImg}
          alt=""/>
        </div>
        <div className="navbar-middle">
          <ul className="navbar-list">
            <li className="navbar-list-item">Home</li>
            <li className="navbar-list-item">Company</li>
            <li className="navbar-list-item">Project Plant</li>
            <li className="navbar-list-item">Team</li>
            <li className="navbar-list-item">Notice</li>
            <li className="navbar-list-item">Downloads</li>
            <li className="navbar-list-item">Gallery</li>
            <li className="navbar-list-item">Sister Companies</li>
            <li className="navbar-list-item">Events</li>
            <li className="navbar-list-item">Contact Us</li>
          </ul>
        </div>
        <div className="navbar-right">
          <div className="searchIcon">23</div>
        <div className="some-container">
          <span className='container-left'>eng</span>
          <span className='container-right'>set</span>
        </div>
        {/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> */}
        </div>
      </div>
    )
}

export default Navbar