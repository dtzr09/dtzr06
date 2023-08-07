import React from "react";
import Footer from "../Components/Footer/Footer";
import ExperiencePage from "../Routes/Experience/ExperiencePage";
import ContactPage from "../Routes/Contact/ContactPage";
import CreationsPage from "../Routes/Creations/CreationsPage";
import MainPage from "../Routes/Main/Mainpage";
import { backgroundColor } from "../styles/variables";

function Home() {
  return (
    <div style={{ overflow: "hidden", backgroundColor: backgroundColor }}>
      <MainPage />
      <ExperiencePage />
      <CreationsPage />
      <ContactPage />
      <Footer />
    </div>
  );
}

export default Home;
