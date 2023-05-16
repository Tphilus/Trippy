import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Forms from "../components/Forms";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="CONTACTS." text="Let's have a chat" />
      <Forms />
      <Footer />
    </div>
  );
};

export default Contact;
