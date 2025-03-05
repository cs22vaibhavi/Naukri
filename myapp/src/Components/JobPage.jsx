import React from "react";
import "./JobPage.css";
import JobListing from "./JobListing";
import JobDescription from "./JobDescription";
import RelatedJobs from "./RelatedJobs";
import Reviews from "./Reviews";

const JobPage = () => {
  return (
    <div className="jobPage">
      <div className="leftColumn">
        <JobListing />
        <JobDescription />
      </div>
      <div className="rightColumn">
        <RelatedJobs />
        <Reviews />
      </div>
    </div>
  );
};

export default JobPage;