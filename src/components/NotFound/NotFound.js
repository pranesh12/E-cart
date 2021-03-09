import React from "react";
import funnyGirl from "../../resources/images/tenor.gif";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="d-flex flex-column justify-content-center">
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
