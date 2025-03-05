import React from "react";
import "./RelatedJobs.css";

const jobs = [
  /* { title: "Korean Educator", experience: "1-5 Yrs", location: "Bengaluru (Domlur)", posted: "19 days ago" },
  { title: "Sales Manager/ Senior Sales Manager", experience: "2-5 Yrs", location: "Delhi / NCR", posted: "24 days ago" },
  { title: "Business Development Manager", experience: "3-5 Yrs", location: "Varanasi", posted: "30 days ago" } */
];

const RelatedJobs = () => {
  return (
    <div className="relatedJobs">
      
      <h3>Unacademy roles <br></br>
      you might be interested in</h3>
      <b>Korean educator</b><br></br>
      <img src="https://yt3.googleusercontent.com/ytc/AIdro_nCtT9fD37NkD-qXYim9LUc6_HWulcfL2SeU51ZlRS8dkQ=s900-c-k-c0x00ffffff-no-rj" width="70px" height="70px"></img>
      
      
      <ul>
        {jobs.map((job, index) => (
          <li key={index} className="jobItem">
            <h4>{job.title}</h4>
            <p>📅 {job.experience} | 📍 {job.location}</p>
            <span>Posted {job.posted}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RelatedJobs;