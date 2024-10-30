import React from "react";
import MainSection from "./MainSection"
import FeatureSection from "./FeatureSection"
import Images from "./images"
import Footer from "./Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App"> 
      <Navbar/>
      <MainSection />
      <FeatureSection />
      <Images />
      <Footer />
    </div>
  );
}

export default App;
