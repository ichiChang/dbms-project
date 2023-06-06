import React from "react";
import { Link } from "react-router-dom";
import LakkiReddyFont from "../fonts/LakkiReddy-Regular.ttf";
import Coconut from "../images/coconut.svg";

const MyNavbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{
        backgroundColor: "#D0B7B7",
        paddingTop: "5px",
        paddingBottom: "5px",
      }}
    >
      <style>
        {`
        @font-face {
          font-family: 'LakkiReddy';
          src: url(${LakkiReddyFont}) format('truetype');
          font-weight: bold;
          font-style: normal;
        }
        `}
      </style>
      <Link to="/" className="navbar-brand" style={{ marginLeft: "10px" }}>
        <div
          style={{
            backgroundImage: `url(${Coconut})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center calc(50% + 10px)",
            backgroundSize: "272.16px 190px",
            display: "inline-block",
            height: "84px",
            width: "62px",
          }}
        />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link
              to="/"
              className="nav-link"
              style={{
                color: "black",
                fontFamily: "Microsoft YaHei",
                fontSize: "24px",
                fontWeight: "bold",
                marginLeft: "10px",
              }}
            >
              政大遺失物平台
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/lost"
              className="nav-link"
              style={{
                color: "black",
                fontFamily: "LakkiReddy",
                fontSize: "20px",
                fontWeight: "bold",
                marginLeft: "100px",
                marginTop: "10px",
              }}
            >
              Lost List
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/found"
              className="nav-link"
              style={{
                color: "black",
                fontFamily: "LakkiReddy",
                fontSize: "20px",
                fontWeight: "bold",
                marginLeft: "30px",
                marginTop: "10px",
              }}
            >
              Found List
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MyNavbar;
