import React from "react";
import { Link } from "react-router-dom";
import funnyGirl from "../../resources/images/tenor.gif";
import "./NotFound.css";
const NotFound = () => {
  return (
    <div className="Not_found">
      <h2>Sorry Page not Found(404) </h2>
      <div>
        <img src={funnyGirl} alt="funnyGirl" />
      </div>

      <Link to="/">
        <button className="btn btn-info mt-4">Back to Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
