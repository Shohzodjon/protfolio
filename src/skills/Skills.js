import React from "react";

// style
import "./skills.css";

const Skills = ({ width }) => {
  return (
    <section className="container skills__section">
      <h5 className="skills--head">What skills I have</h5>
      <h2>My skills</h2>

      {width === "600px" ? (
        <div
          className="flex skill__box--flex"
          style={{
            flexDirection: "column",
            margin: " 2rem auto",
            width: "98%",
            rowGap: "1.5rem",
            alignItems: "center",
          }}
        >
          <div
            className="skill__card"
            style={{ width: "100%", borderRadius: "1rem" }}
          >
            <h3>Frontend development</h3>

            <div className="skills__child--flex">
              <div>
                <div className="skills__details">
                  <h5>HTML5</h5>
                  <small className="skill__detail--text">Experienced</small>
                </div>
                <div className="skills__details">
                  <h5>CSS3</h5>
                  <small className="skill__detail--text">Experienced</small>
                </div>

                <div className="kills__details">
                  <h5>Bootstrap5</h5>
                  <small className="skill__detail--text">Experienced</small>
                </div>
                <div className="skills__details">
                  <h5>JavaScript</h5>
                  <small className="skill__detail--text">Experienced</small>
                </div>
              </div>

              <div>
                <div className="skills__details">
                  <h5>React JS</h5>
                  <small className="skill__detail--text">Experienced</small>
                </div>
                <div className="skills__details">
                  <h5>Redux</h5>
                  <small className="skill__detail--text">Normal</small>
                </div>
                <div className="skills__details">
                  <h5>Sytled Components</h5>
                  <small className="skill__detail--text">Experienced</small>
                </div>

                <div className="skills__details">
                  <h5>React ContextAPI</h5>
                  <small className="skill__detail--text">Normal</small>
                </div>
              </div>
            </div>
          </div>

          <div
            className="skill__card"
            style={{ width: "100%", borderRadius: "1rem", height: "300px" }}
          >
            <h3>Extra skills</h3>
            <div className="skills__child--flex">
              <div className="skills__details">
                <h5>GitHub</h5>
                <small className="skill__detail--text">Experienced</small>
              </div>

              <div className="skills__details">
                <h5>GitLab</h5>
                <small className="skill__detail--text">Experienced</small>
              </div>

              <div className="skills__details">
                <h5>Postman</h5>
                <small className="skill__detail--text">Experienced</small>
              </div>

              <div className="skills__details">
                <h5>Enlish </h5>
                <small className="skill__detail--text">Intermediate</small>
              </div>

              <div className="skills__details">
                <h5>BEM</h5>
              </div>
            </div>
          </div>
        </div>
      ) : width === "800px" ? (
        <div className="flex skill__box--flex" style={{ width: "100%" }}>
          <div className="skill__card" style={{ width: "48%" }}>
            <h3>Frontend development</h3>

            <div className="skills__child--flex">
              <div>
                <div className="skills__details">
                  <h5>HTML5</h5>
                  <small className="skill__detail--text">Experienced</small>
                </div>
                <div className="skills__details">
                  <h5>CSS3</h5>
                  <small className="skill__detail--text">Experienced</small>
                </div>

                <div className="kills__details">
                  <h5>Bootstrap5</h5>
                  <small className="skill__detail--text">Experienced</small>
                </div>
                <div className="skills__details">
                  <h5>JavaScript</h5>
                  <small className="skill__detail--text">Experienced</small>
                </div>
              </div>

              <div>
                <div className="skills__details">
                  <h5>React JS</h5>
                  <small className="skill__detail--text">Experienced</small>
                </div>
                <div className="skills__details">
                  <h5>Redux</h5>
                  <small className="skill__detail--text">Normal</small>
                </div>
                <div className="skills__details">
                  <h5>Sytled Components</h5>
                  <small className="skill__detail--text">Experienced</small>
                </div>

                <div className="skills__details">
                  <h5>React ContextAPI</h5>
                  <small className="skill__detail--text">Normal</small>
                </div>
              </div>
            </div>
          </div>

          <div className="skill__card" style={{ width: "48%" }}>
            <h3>Extra skills</h3>
            <div className="skills__child--flex">
              <div className="skills__details">
                <h5>GitHub</h5>
                <small className="skill__detail--text">Experienced</small>
              </div>

              <div className="skills__details">
                <h5>GitLab</h5>
                <small className="skill__detail--text">Experienced</small>
              </div>

              <div className="skills__details">
                <h5>Postman</h5>
                <small className="skill__detail--text">Experienced</small>
              </div>

              <div className="skills__details">
                <h5>Enlish </h5>
                <small className="skill__detail--text">Intermediate</small>
              </div>

              <div className="skills__details">
                <h5>BEM</h5>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex skill__box--flex">
          <div className="skill__card">
            <h3>Frontend development</h3>

            <div className="skills__child--flex">
              <div>
                <div className="skills__details">
                  <h5>HTML5</h5>
                  <small className="skill__detail--text">Experienced</small>
                </div>
                <div className="skills__details">
                  <h5>CSS3</h5>
                  <small className="skill__detail--text">Experienced</small>
                </div>

                <div className="kills__details">
                  <h5>Bootstrap5</h5>
                  <small className="skill__detail--text">Experienced</small>
                </div>
                <div className="skills__details">
                  <h5>JavaScript</h5>
                  <small className="skill__detail--text">Experienced</small>
                </div>
              </div>

              <div>
                <div className="skills__details">
                  <h5>React JS</h5>
                  <small className="skill__detail--text">Experienced</small>
                </div>
                <div className="skills__details">
                  <h5>Redux</h5>
                  <small className="skill__detail--text">Normal</small>
                </div>
                <div className="skills__details">
                  <h5>Sytled Components</h5>
                  <small className="skill__detail--text">Experienced</small>
                </div>

                <div className="skills__details">
                  <h5>React ContextAPI</h5>
                  <small className="skill__detail--text">Normal</small>
                </div>
              </div>
            </div>
          </div>

          <div className="skill__card">
            <h3>Extra skills</h3>
            <div className="skills__child--flex">
              <div className="skills__details">
                <h5>GitHub</h5>
                <small className="skill__detail--text">Experienced</small>
              </div>

              <div className="skills__details">
                <h5>GitLab</h5>
                <small className="skill__detail--text">Experienced</small>
              </div>

              <div className="skills__details">
                <h5>Postman</h5>
                <small className="skill__detail--text">Experienced</small>
              </div>

              <div className="skills__details">
                <h5>Enlish </h5>
                <small className="skill__detail--text">Intermediate</small>
              </div>

              <div className="skills__details">
                <h5>BEM</h5>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
export default Skills;
