import "./style.css";
import "../../js/jq.js";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Home from "./Home";
import About from "./About";
import Skill from "./Skill";
import Activity from "./Activity";
import Project from "./Project";

const Main = () => {
  return (
    <div className="App">
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />

        <Home />
        <About />
        <Skill />
        <Project />
        <Activity />

        <Footer />
      </body>
    </div>
  );
};

export default Main;
