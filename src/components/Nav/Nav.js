import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="row">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <h6 className="text-primary nav-link">fgf</h6>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">
                  <h6>Product</h6>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/order">
                  <h6>Order Review</h6>
                </Link>
              </li>
            </ul>
            <span className="navbar-text">Cart</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
