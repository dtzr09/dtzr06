import React from "react";
import Footer from "../Components/Footer/Footer";
import AboutPage from "../Routes/About/Aboutpage";
import ContactPage from "../Routes/Contact/ContactPage";
import CreationsPage from "../Routes/Creations/CreationsPage";
import MainPage from "../Routes/Main/Mainpage";

function Home() {
  return (
    <div style={{ overflow: "hidden", backgroundColor: "#1d2638" }}>
      <MainPage />
      <AboutPage />
      <CreationsPage />
      <ContactPage />
      <Footer />
    </div>
  );
}

export default Home;
