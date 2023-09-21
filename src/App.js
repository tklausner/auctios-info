import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import "./styles/App.css";
import Features from "./components/Features";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import GalleryLight from "./components/GalleryLight";
import GalleryDark from "./components/GalleryDark";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Features />
      <GalleryLight />
      <GalleryDark />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
