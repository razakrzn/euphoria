import React from "react";
import Header from "../includes/Header";
import Sportlight from "./Sportlight";
import OfferSection from "./OfferSection";
import NewArival from "./NewArival";

function Home() {
  return (
    <>
      <Header />
      <Sportlight />
      <OfferSection />
      <NewArival />
    </>
  );
}

export default Home;
