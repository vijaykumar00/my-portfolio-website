import React from "react";
import Header from "./Components/header";
import HomePage from "./Components/homePage";
import Footer from "./Components/Footer";
import '../src/css/homepage.css';

const App = () => {
  return(
    <div className="app">
      <Header />
    <HomePage />
  <Footer />
    </div>
  )
}

export default App;