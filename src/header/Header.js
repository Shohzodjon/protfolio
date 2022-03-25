import React from "react";
import Typical from "react-typical";
import myPicture from "../assets/photo_2022-03.jpg";
import CV from "../assets/Resume.pdf";
// style
import "./header.css";

const Header = ({ width }) => {
  return (
    <section className="container header__container">
      <h1>Hi my name is Shohzod </h1>
      <Typical
        steps={["", 1000, "I am Frontend developer!", 2000]}
        loop={Infinity}
        wrapper="h2"
      />
      {width === "600px" ? (
        <>
          <div className="btn__group" style={{ flexWrap: "wrap" }}>
            <a
              href={CV}
              download
              className="btn btn__download"
              style={{ width: "100%" }}
            >
              Download my CV
            </a>
            <a className="btn btn__talk" style={{ width: "100%" }}>
              Let's talk{" "}
            </a>
          </div>
          <div
            className="header__picture"
            style={{ width: "100%", height: "25rem" }}
          >
            <img src={myPicture} />
          </div>
        </>
      ) : (
        <>
          <div className="btn__group">
            <a href={CV} download className="btn btn__download">
              Download my CV
            </a>
            <a className="btn btn__talk">Let's talk </a>
          </div>
          <div className="header__picture">
            <img src={myPicture} />
          </div>
        </>
      )}
    </section>
  );
};

export default Header;
