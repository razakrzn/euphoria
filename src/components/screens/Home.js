import React from "react";
import Header from "../includes/Header";
import Sportlight from "./Sportlight";
import OfferSection from "./OfferSection";
import NewArival from "./NewArival";
import Promotion from "./Promotion";
import CatogeriesForMen from "./CatogeriesForMen";
import CategoriesForWomen from "./CategoriesForWomen";
import BrandsDeal from "./BrandsDeal";
import TheLimelight from "./TheLimelight";
import Feedback from "./Feedback";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Header />
      <Sportlight />
      <OfferSection />
      <NewArival />
      <Promotion />
      <CatogeriesForMen />
      <CategoriesForWomen />
      <BrandsDeal />
      <TheLimelight />
      <Feedback />
      <Footer />
    </>
  );
}

export default Home;
