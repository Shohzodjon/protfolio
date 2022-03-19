import React from "react";
import IMG from "../assets/coding.gif";

// style
import "./about.css";

const About = ({ width }) => {
  return (
    <section className=" container about__container">
      <h2>About Me</h2>
      {width == "600px" ? (
        <div className="flex about__box" style={{ flexWrap: "wrap" }}>
          <div className="about__picture" style={{ width: "100%" }}>
            <img src={IMG} alt="Picture" />
          </div>
          <div
            className="about__wrapp"
            style={{ width: "100%", marginTop: "1rem" }}
          >
            <div
              className="flex about__flex--box"
              style={{ width: "100%", margin: "0 atuo 1rem" }}
            >
              <div className="about__experience">
                <div className="experience__icon">
                  <i className="bi bi-journal-richtext"></i>
                </div>
                <h3>Experience</h3>
                <p>3+ month</p>
                <small>Working</small>
              </div>

              <div className="about__experience">
                <div className="experience__icon">
                  <i className="bi bi-journal-check"></i>
                </div>
                <h3>Project</h3>
                <p>Mini 10+</p>
              </div>

              <div className="about__experience ">
                <div className="experience__icon">
                  <i className="bi bi-people-fill"></i>
                </div>
                <h3>Clients</h3>
                <p>100 WorldWide</p>
              </div>
            </div>
            <p>
              Importantly, React.js lets you **choose** which pre-rendering form
              to use for each page. You can create a "hybrid" React.js app by
              using Static Generation for most pages and using Server-side
              Rendering for others.
            </p>
          </div>
        </div>
      ) : width === "800px" ? (
        <div
          className="flex about__box"
          style={{ flexDirection: "column", justifyContent: "center" }}
        >
          <div
            className="about__picture"
            style={{ width: "100%", borderRadius: "1rem", overflow: "hidden" }}
          >
            <img src={IMG} alt="Picture" />
          </div>
          <div
            className="about__wrapp"
            style={{ width: "100%", marginTop: "1rem" }}
          >
            <div
              className="flex about__flex--box"
              style={{ width: "96%", margin: "0 auto 1rem" }}
            >
              <div className="about__experience" style={{ width: "48%" }}>
                <div className="experience__icon">
                  <i className="bi bi-journal-richtext"></i>
                </div>
                <h3>Experience</h3>
                <p>3+ month</p>
                <small>Working</small>
              </div>

              <div className="about__experience" style={{ width: "48%" }}>
                <div className="experience__icon">
                  <i className="bi bi-journal-check"></i>
                </div>
                <h3>Project</h3>
                <p>Mini 10+</p>
              </div>

              <div className="about__experience " style={{ width: "48%" }}>
                <div className="experience__icon">
                  <i className="bi bi-people-fill"></i>
                </div>
                <h3>Clients</h3>
                <p>100 WorldWide</p>
              </div>
            </div>
            <p>
              Importantly, React.js lets you **choose** which pre-rendering form
              to use for each page. You can create a "hybrid" React.js app by
              using Static Generation for most pages and using Server-side
              Rendering for others.
            </p>
          </div>
        </div>
      ) : (
        <div className="flex about__box">
          <div className="about__picture">
            <img src={IMG} alt="Picture" />
          </div>
          <div className="about__wrapp">
            <div className="flex about__flex--box">
              <div className="about__experience">
                <div className="experience__icon">
                  <i className="bi bi-journal-richtext"></i>
                </div>
                <h3>Experience</h3>
                <p>3+ month</p>
                <small>Working</small>
              </div>

              <div className="about__experience">
                <div className="experience__icon">
                  <i className="bi bi-journal-check"></i>
                </div>
                <h3>Project</h3>
                <p>Mini 10+</p>
              </div>

              <div className="about__experience ">
                <div className="experience__icon">
                  <i className="bi bi-people-fill"></i>
                </div>
                <h3>Clients</h3>
                <p>100 WorldWide</p>
              </div>
            </div>
            <p>
              Importantly, React.js lets you **choose** which pre-rendering form
              to use for each page. You can create a "hybrid" React.js app by
              using Static Generation for most pages and using Server-side
              Rendering for others.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
