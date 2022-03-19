import React, { useState } from "react";

import Header from "./header/Header";
import "./app.css";
import Navbar from "./nav/Navbar";
import Portfolio from "./portfolio/Porfolio";
import Skills from "./skills/Skills";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import About from "./about/About";
import Sertificate from "./sertificate/Sertificate";

const App = () => {
  const [width, setWith] = useState("");
  const changeWith = (w) => {
    setWith(w);
  };
  return (
    <section className="section" style={{ maxWidth: width, margin: "0 auto" }}>
      <Header width={width} />
      <Navbar changeWith={changeWith} />
      <About width={width} />
      <Skills width={width} />
      <Portfolio width={width} />
      <Sertificate width={width} />
      <Contact width={width} />
      <Footer width={width} />
    </section>
  );
};

export default App;
