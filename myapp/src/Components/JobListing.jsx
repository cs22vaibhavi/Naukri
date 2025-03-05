import React from "react";
import "./JobListing.css";
import Button from "./Button";

const JobListing = () => {
  return (
    <div className="jobListing">
      <div className="header">
        <h2>Senior Finance Executive Revenue To Record CA Freshers</h2>
        <img src="https://yt3.googleusercontent.com/ytc/AIdro_nCtT9fD37NkD-qXYim9LUc6_HWulcfL2SeU51ZlRS8dkQ=s900-c-k-c0x00ffffff-no-rj" width="50px" height="50px"></img>
      </div>
      <div className="unacademy">
       
        <p className="company">Unacademy ⭐ 3.0 | 1945 Reviews</p>
        </div>
      <div className="details">
        <span><img src="https://img.icons8.com/?size=20&id=8yG2a6v2mm3S&format=png"></img>0 - 2 years </span>|
        <span><img src="https://img.icons8.com/?size=20&id=B5w0V2fjjZ38&format=png"></img>Not Disclosed</span><br></br>
        <span><img src="https://img.icons8.com/?size=20&id=3723&format=png"></img>Bengaluru</span><br></br>
        
      </div>
      <div className="meta">
        <p>Posted: 17 days ago | Openings: 2 | Applicants: 884</p>
        
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