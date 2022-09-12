import React from "react";
import Banner from "../../Components/Banner/Banner";
import Card from "../../Components/Card/Card";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Contact from "../../Components/Contact/Contact";
import Projects from "../../Components/Projects/Projects";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Card />
      <Projects />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
