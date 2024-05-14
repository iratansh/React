import "./App.css";
import React from "react";
import NavigationBar from "./navbar";
import Home from "./home";
import AboutMe from "./aboutMe";
import Portfolio from "./portfolio";
import ContactMe from "./contactMe";
import BottomBox from "./bottomBox";

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Home></Home>
      <AboutMe></AboutMe>
      <Portfolio></Portfolio>
      <ContactMe></ContactMe>
      <BottomBox></BottomBox>
    </div>
  );
}

export default App;

