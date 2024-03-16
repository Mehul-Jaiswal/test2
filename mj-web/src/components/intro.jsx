import React from "react";
import "./back.css";
import { ReactTyped } from "react-typed";
import mehul from "../img/mehul3.jpg";

class Intro extends React.Component {
  render() {
    return (
      <div class="overlay">
      <div id="home" className="intro route bg-image background">
        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container1">
              <div className="img-container">
                <img src={mehul} alt="" className="img-intro-pic" />
              </div>
              <div className="text-container">
              <h1 className="intro-title mb-4">Mehul Jaiswal</h1>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <ReactTyped
                    strings={[
                      "Tech Enthusiast",
                      "Startup Enthusiast",
                      "Software Engineer"
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>
              <p className="pt-3">
                <a
                  className="btn btn-primary btn js-scroll px-4"
                  href="#about"
                  role="button"
                >
                  About Me
                </a>
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Intro;
