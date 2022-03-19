import React from "react";
import Html from "../assets/HTML.jpg";
import Css from "../assets/CSS.jpg";
import Response from "../assets/ResponseCourse.jpg";
import Foundation from "../assets/foundation.jpg";
// style
import "./sertificate.css";

const Sertificate = ({ width }) => {
  return (
    <section className="container sertificate__container">
      <h2>My achievements</h2>
      {width === "600px" ? (
        <div
          className="sertificate__grid"
          style={{ gridTemplateColumns: "1fr" }}
        >
          <div className="achievements__picture">
            <h3>HTML5 Course</h3>
            <img src={Html} alt="Html sertificate" />
          </div>

          <div className="achievements__picture">
            <h3>CSS3 Course</h3>
            <img src={Css} alt="Html sertificate" />
          </div>

          <div className="achievements__picture">
            <h3>Responce Web Design </h3>
            <img src={Response} alt="Html sertificate" />
          </div>

          <div className="achievements__picture">
            <h3>PDP Academy Foundation</h3>
            <img src={Foundation} alt="Html sertificate" />
          </div>
        </div>
      ) : width === "800px" ? (
        <div
          className="sertificate__grid"
          style={{ gridTemplateColumns: "1fr 1fr" }}
        >
          <div className="achievements__picture">
            <h3>HTML5 Course</h3>
            <img src={Html} alt="Html sertificate" />
          </div>

          <div className="achievements__picture">
            <h3>CSS3 Course</h3>
            <img src={Css} alt="Html sertificate" />
          </div>

          <div className="achievements__picture">
            <h3>Responce Web Design </h3>
            <img src={Response} alt="Html sertificate" />
          </div>

          <div className="achievements__picture">
            <h3>PDP Academy </h3>
            <img src={Foundation} alt="Html sertificate" />
          </div>
        </div>
      ) : (
        <div className="sertificate__grid">
          <div className="achievements__picture">
            <h3>HTML5 Course</h3>
            <img src={Html} alt="Html sertificate" />
          </div>

          <div className="achievements__picture">
            <h3>CSS3 Course</h3>
            <img src={Css} alt="Html sertificate" />
          </div>

          <div className="achievements__picture">
            <h3>Responce Web Design</h3>
            <img src={Response} alt="Html sertificate" />
          </div>

          <div className="achievements__picture">
            <h3>PDP Academy Foundation</h3>
            <img src={Foundation} alt="Html sertificate" />
          </div>
        </div>
      )}
    </section>
  );
};
export default Sertificate;
