import React from "react";
import "./NaukriHeader.css";

import { FaSearch } from "react-icons/fa";


const NaukriHeader = () => {
  return (
    <header className="naukri-header">
      <div className="naukri-logo">
        <img src="https://ts1.mm.bing.net/th?id=OIP.79135SDgGpsK7lsujRR9MAAAAA&pid=15.1" alt="Naukri Logo" />
      </div>
      <nav className="naukri-nav">
        <a href="#">Jobs</a>
        <a href="#">Companies</a>
        <a href="#">Services</a>
      </nav>
      <div className="naukri-search">
        <input type="text" placeholder="Search jobs here" />
           <span className="icon"> <FaSearch /></span>     
      </div>
      <div className="naukri-auth">
        <button className="login-btn">Login</button>
        <button className="register-btn">Register</button>
      </div>
      <div className="naukri-employers">
        <span>For employers </span>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdRpfJAmS-YTazaos7KxHZdpzvho0LsyhVA&s"width="15px" height="10px"></img>

        
        
      </div>
    </header>
  );
};

export default NaukriHeader;