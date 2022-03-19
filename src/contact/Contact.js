import React from "react";

// style
import "./contact.css";

const Contact = ({ width }) => {
  return (
    <section className="container contact__container">
      <h3>Getting Touch </h3>
      <h2>Contact Me</h2>
      <form>
        {width === "600px" ? (
          <div
            className="flex form__container container"
            style={{ flexDirection: "column" }}
          >
            <div className="social--media" style={{ width: "100%" }}>
              <div className="email--adress">
                <h3>Email</h3>
                <p>xorozovshohzod@gmail.com</p>
              </div>

              <div className="email--adress">
                <h3>Telegram</h3>
                <p>@Shohzod1997</p>
              </div>

              <div className="email--adress">
                <h3>Phone</h3>
                <p>+99893 336-94-04</p>
              </div>
            </div>
            <div className="message--container" style={{ width: "100%" }}>
              <input type="text" placeholder="Your name" />
              <input type="email" placeholder="Your email" />
              <textarea
                name="message"
                rows="7"
                placeholder="Your message"
                required
              ></textarea>

              <button className="btn__message">Send message</button>
            </div>
          </div>
        ) : width === "800px" ? (
          <div
            className="flex form__container container"
            style={{ flexDirection: "column" }}
          >
            <div className="social--media" style={{ width: "100%" }}>
              <div className="email--adress">
                <h3>Email</h3>
                <p>xorozovshohzod@gmail.com</p>
              </div>

              <div className="email--adress">
                <h3>Telegram</h3>
                <p>@Shohzod1997</p>
              </div>

              <div className="email--adress">
                <h3>Phone</h3>
                <p>+99893 336-94-04</p>
              </div>
            </div>
            <div className="message--container" style={{ width: "100%" }}>
              <input type="text" placeholder="Your name" />
              <input type="email" placeholder="Your email" />
              <textarea
                name="message"
                rows="7"
                placeholder="Your message"
                required
              ></textarea>

              <button className="btn__message">Send message</button>
            </div>
          </div>
        ) : (
          <div className="flex form__container container">
            <div className="social--media">
              <div className="email--adress">
                <h3>Email</h3>
                <p>xorozovshohzod@gmail.com</p>
              </div>

              <div className="email--adress">
                <h3>Telegram</h3>
                <p>@Shohzod1997</p>
              </div>

              <div className="email--adress">
                <h3>Phone</h3>
                <p>+99893 336-94-04</p>
              </div>
            </div>
            <div className="message--container">
              <input type="text" placeholder="Your name" />
              <input type="email" placeholder="Your email" />
              <textarea
                name="message"
                rows="7"
                placeholder="Your message"
                required
              ></textarea>

              <button className="btn__message">Send message</button>
            </div>
          </div>
        )}
      </form>
    </section>
  );
};
export default Contact;
