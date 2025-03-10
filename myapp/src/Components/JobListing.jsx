import React from "react";
import "./JobListing.css";
import Button from "./Button";
import { MdOutlineDateRange } from "react-icons/md";
import { MdCurrencyRupee } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const JobListing = () => {
  return (
    <div className="jobListing">
      <div className="header">
        <h2>Senior Finance Executive Revenue To Record CA Freshers</h2>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLwYfTFsaXCllOoqlFw05E2V6YcBH8Bo-fhw&s" width="50px" height="50px"></img><br></br>
        <h5>Send me jobs like this</h5>
      </div>
      <div className="unacademy">
       
        <p className="company">Unacademy ⭐ 3.0 | 1945 Reviews</p>
        </div>
      <div className="details">
      <MdOutlineDateRange />0 - 2 years  |
      <MdCurrencyRupee />Not Disclosed<br></br>
      <IoLocationOutline />Bengalore
        
        
        <div class="border">
          
        </div>
        
      </div>
      <div className="meta">
        <p>Posted:17 days ago| Openings:2 | Applicants:884</p>
        
      </div>
      <div className="actions">
        <Button text="Register to apply" variant="secondary" /></div><br></br>
      <div className="actions1">
        <Button text="Login to apply" variant="primary" />
      </div>
    </div>
  );
};

export default JobListing;