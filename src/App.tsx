import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import HelpAndSupport from "./components/HelpAndSupport.tsx";
import HowToPlay from "./components/HowToPlay.tsx";
import Reviews from "./components/Reviews.tsx";
import Partner from "./components/Partners.tsx";
import DisplayCards from "./components/DisplayCards.tsx";
import FAQ from "./components/FAQ.tsx"
// import AboutUs from './components/AboutUs.tsx';
// import MatchCard from './components/Card.tsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Partner />
      <DisplayCards />
      <HowToPlay />
      <Reviews />
      <HelpAndSupport />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
