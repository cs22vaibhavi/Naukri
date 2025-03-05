import React from "react";
import "./Reviews.css";

const Reviews = () => {
  return (
    <div className="reviews">
      <div className="header">
        <h3>Reviews</h3>
        <a href="#">Read all 1945 reviews</a>
      </div>
      <div className="reviewItem">
        <h4>Android Developer for 3 months in Bangalore / Bengaluru</h4>
        <p className="author">Anonymous | 19 Feb 2025</p>
        <p className="rating">⭐☆☆☆☆</p>
        <h5>Likes</h5>
        <p>No, work culture is extremely toxic</p>
      </div>
    </div>
  );
};

export default Reviews;