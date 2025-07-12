import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import URLShortener from "./components/URLShortener";
import Results from "./components/Results";
import Features from "./components/Features";
import Footer from "./components/Footer";
import React from "react";

function App() {
  const [shortenedLinks, setShortenedLinks] = React.useState([]);

  const handleShorten = (newLink) => {
    setShortenedLinks([newLink, ...shortenedLinks]);
  };

  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <URLShortener onShorten={handleShorten} />
      <Results links={shortenedLinks} />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
