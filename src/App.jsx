import React from "react";
import Homepage from "./Components/Homepage";

import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Homepage />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
