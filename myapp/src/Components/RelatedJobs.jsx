import React from "react";
import "./RelatedJobs.css";
import { CiCalendarDate } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";


const jobs = [
  { title: "Korean Educator", experience: "1-5 Yrs", location: "Bengaluru (Domlur)", posted: "19 days ago" },
  { title: "Sales Manager/ Senior Sales Manager", experience: "2-5 Yrs", location: "Delhi / NCR(Noida-Greater Noida...", posted: "24 days ago" },
  { title: "Business Development Manager", experience: "3-5 Yrs", location: "Varanasi", posted: "30 days ago" } 
];

const RelatedJobs = () => {
  return (
    <div className="relatedJobs">
      
      <h3>Unacademy roles <br></br>
      you might be interested in</h3>
      
      
      
       
      <ul>
        {jobs.map((job, index) => (
          <li key={index} className="jobItem">
            
            <h4>{job.title}</h4>
            <p><CiCalendarDate />{job.experience}| <br></br><CiLocationOn />
            {job.location}</p>
            
            <span>Posted {job.posted}</span>
            <div class="image1">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLwYfTFsaXCllOoqlFw05E2V6YcBH8Bo-fhw&s" width="50px" height="50px"></img>
            </div>
            <div class="image2">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLwYfTFsaXCllOoqlFw05E2V6YcBH8Bo-fhw&s" width="50px" height="50px"></img>
            </div>
            <div class="image3">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLwYfTFsaXCllOoqlFw05E2V6YcBH8Bo-fhw&s" width="50px" height="50px"></img>
            </div>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default RelatedJobs;