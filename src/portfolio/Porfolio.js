import React from "react";

import img1 from "../assets/food.png";
import img2 from "../assets/chat--app.png";
import img3 from "../assets/ice--cream.png";
import img4 from "../assets/todo--app.png";
import img5 from "../assets/response.png";
import img6 from "../assets/travel-agent.png";

// style
import "./portfolio.css";

const Portfolio = ({ width }) => {
  return (
    <section className="container portfolio__container">
      <h5 className="skills--head">My recent work</h5>
      <h2>Portfolio</h2>

      {width === "600px" ? (
        <div
          className="porfoilo__gridbox"
          style={{
            gridTemplateColumns: "1fr",
            width: "98%",
            marginTop: "1.5rem",
          }}
        >
          <div className="grid__card">
            <div className="card__img">
              <img src={img1} alt="img" />
            </div>
            <div className="link__group">
              <a
                href="https://github.com/Shohzodjon/Food-website"
                target="_blank"
                className="btn__github"
              >
                GitHub
              </a>
              <a
                href="https://list-of-food.netlify.app/"
                target="_blank"
                className="btn__netlify"
              >
                Netlify
              </a>
            </div>
            <div className="overlay"></div>
          </div>

          <div className="grid__card">
            <div className="card__img">
              <img src={img2} alt="img" />
            </div>
            <div className="link__group">
              <a
                href="https://github.com/Shohzodjon/chat-application"
                target="_blank"
                className="btn__github"
              >
                GitHub
              </a>
              <a
                href="https://chat-application12.netlify.app"
                target="_blank"
                className="btn__netlify"
              >
                Netlify
              </a>
            </div>
            <div className="overlay"></div>
          </div>

          <div className="grid__card">
            <div className="card__img">
              <img src={img3} alt="img" />
            </div>
            <div className="link__group">
              <a
                href="https://github.com/Shohzodjon/Portfolio-Ice-cream"
                target="_blank"
                className="btn__github"
              >
                GitHub
              </a>
              <a
                href="https://observation-project.netlify.app/"
                target="_blank"
                className="btn__netlify"
              >
                Netlify
              </a>
            </div>
            <div className="overlay"></div>
          </div>

          <div className="grid__card">
            <div className="card__img">
              <img src={img4} alt="img" />
            </div>
            <div className="link__group">
              <a
                href="https://github.com/Shohzodjon/todo-list"
                target="_blank"
                className="btn__github"
              >
                GitHub
              </a>
              <a
                href="https://todo-application2.netlify.app"
                target="_blank"
                className="btn__netlify"
              >
                Netlify
              </a>
            </div>
            <div className="overlay"></div>
          </div>

          <div className="grid__card">
            <div className="card__img">
              <img src={img5} alt="img" />
            </div>
            <div className="link__group">
              <a
                href="https://github.com/Shohzodjon/response-web"
                target="_blank"
                className="btn__github"
              >
                GitHub
              </a>
              <a
                href="https://response-design.netlify.app"
                target="_blank"
                className="btn__netlify"
              >
                Netlify
              </a>
            </div>
            <div className="overlay"></div>
          </div>

          <div className="grid__card">
            <div className="card__img">
              <img src={img6} alt="img" />
            </div>
            <div className="link__group">
              <a
                href="https://github.com/Shohzodjon/travel-agent"
                target="_blank"
                className="btn__github"
              >
                GitHub
              </a>
              <a
                href="https://travel007.netlify.app/"
                target="_blank"
                className="btn__netlify"
              >
                Netlify
              </a>
            </div>
            <div className="overlay"></div>
          </div>
        </div>
      ) : width === "800px" ? (
        <div
          className="porfoilo__gridbox"
          style={{ gridTemplateColumns: "1fr 1fr" }}
        >
          <div className="grid__card">
            <div className="card__img">
              <img src={img1} alt="img" />
            </div>
            <div className="link__group">
              <a
                href="https://github.com/Shohzodjon/Food-website"
                target="_blank"
                className="btn__github"
              >
                GitHub
              </a>
              <a
                href="https://list-of-food.netlify.app/"
                target="_blank"
                className="btn__netlify"
              >
                Netlify
              </a>
            </div>
            <div className="overlay"></div>
          </div>

          <div className="grid__card">
            <div className="card__img">
              <img src={img2} alt="img" />
            </div>
            <div className="link__group">
              <a
                href="https://github.com/Shohzodjon/chat-application"
                target="_blank"
                className="btn__github"
              >
                GitHub
              </a>
              <a
                href="https://chat-application12.netlify.app"
                target="_blank"
                className="btn__netlify"
              >
                Netlify
              </a>
            </div>
            <div className="overlay"></div>
          </div>

          <div className="grid__card">
            <div className="card__img">
              <img src={img3} alt="img" />
            </div>
            <div className="link__group">
              <a
                href="https://github.com/Shohzodjon/Portfolio-Ice-cream"
                target="_blank"
                className="btn__github"
              >
                GitHub
              </a>
              <a
                href="https://observation-project.netlify.app/"
                target="_blank"
                className="btn__netlify"
              >
                Netlify
              </a>
            </div>
            <div className="overlay"></div>
          </div>

          <div className="grid__card">
            <div className="card__img">
              <img src={img4} alt="img" />
            </div>
            <div className="link__group">
              <a
                href="https://github.com/Shohzodjon/todo-list"
                target="_blank"
                className="btn__github"
              >
                GitHub
              </a>
              <a
                href="https://todo-application2.netlify.app"
                target="_blank"
                className="btn__netlify"
              >
                Netlify
              </a>
            </div>
            <div className="overlay"></div>
          </div>

          <div className="grid__card">
            <div className="card__img">
              <img src={img5} alt="img" />
            </div>
            <div className="link__group">
              <a
                href="https://github.com/Shohzodjon/response-web"
                target="_blank"
                className="btn__github"
              >
                GitHub
              </a>
              <a
                href="https://response-design.netlify.app"
                target="_blank"
                className="btn__netlify"
              >
                Netlify
              </a>
            </div>
            <div className="overlay"></div>
          </div>

          <div className="grid__card">
            <div className="card__img">
              <img src={img6} alt="img" />
            </div>
            <div className="link__group">
              <a
                href="https://github.com/Shohzodjon/travel-agent"
                target="_blank"
                className="btn__github"
              >
                GitHub
              </a>
              <a
                href="https://travel007.netlify.app/"
                target="_blank"
                className="btn__netlify"
              >
                Netlify
              </a>
            </div>
            <div className="overlay"></div>
          </div>
        </div>
      ) : (
        <div className="porfoilo__gridbox">
          <div className="grid__card">
            <div className="card__img">
              <img src={img1} alt="img" />
            </div>
            <div className="link__group">
              <a
                href="https://github.com/Shohzodjon/Food-website"
                target="_blank"
                className="btn__github"
              >
                GitHub
              </a>
              <a
                href="https://list-of-food.netlify.app/"
                target="_blank"
                className="btn__netlify"
              >
                Netlify
              </a>
            </div>
            <div className="overlay"></div>
          </div>

          <div className="grid__card">
            <div className="card__img">
              <img src={img2} alt="img" />
            </div>
            <div className="link__group">
              <a
                href="https://github.com/Shohzodjon/chat-application"
                target="_blank"
                className="btn__github"
              >
                GitHub
              </a>
              <a
                href="https://chat-application12.netlify.app"
                target="_blank"
                className="btn__netlify"
              >
                Netlify
              </a>
            </div>
            <div className="overlay"></div>
          </div>

          <div className="grid__card">
            <div className="card__img">
              <img src={img3} alt="img" />
            </div>
            <div className="link__group">
              <a
                href="https://github.com/Shohzodjon/Portfolio-Ice-cream"
                target="_blank"
                className="btn__github"
              >
                GitHub
              </a>
              <a
                href="https://observation-project.netlify.app/"
                target="_blank"
                className="btn__netlify"
              >
                Netlify
              </a>
            </div>
            <div className="overlay"></div>
          </div>

          <div className="grid__card">
            <div className="card__img">
              <img src={img4} alt="img" />
            </div>
            <div className="link__group">
              <a
                href="https://github.com/Shohzodjon/todo-list"
                target="_blank"
                className="btn__github"
              >
                GitHub
              </a>
              <a
                href="https://todo-application2.netlify.app"
                target="_blank"
                className="btn__netlify"
              >
                Netlify
              </a>
            </div>
            <div className="overlay"></div>
          </div>

          <div className="grid__card">
            <div className="card__img">
              <img src={img5} alt="img" />
            </div>
            <div className="link__group">
              <a
                href="https://github.com/Shohzodjon/response-web"
                target="_blank"
                className="btn__github"
              >
                GitHub
              </a>
              <a
                href="https://response-design.netlify.app"
                target="_blank"
                className="btn__netlify"
              >
                Netlify
              </a>
            </div>
            <div className="overlay"></div>
          </div>

          <div className="grid__card">
            <div className="card__img">
              <img src={img6} alt="img" />
            </div>
            <div className="link__group">
              <a
                href="https://github.com/Shohzodjon/travel-agent"
                target="_blank"
                className="btn__github"
              >
                GitHub
              </a>
              <a
                href="https://travel007.netlify.app/"
                target="_blank"
                className="btn__netlify"
              >
                Netlify
              </a>
            </div>
            <div className="overlay"></div>
          </div>
        </div>
      )}
    </section>
  );
};
export default Portfolio;
