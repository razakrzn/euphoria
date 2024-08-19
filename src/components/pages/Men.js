import React from "react";
import Header from "../includes/Header";
import { Helmet, HelmetProvider } from "react-helmet-async";
import CategoriesForMen from "../screens/CatogoriesForMen";

function Men() {
  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>Product Detail Page | Men</title>
        </Helmet>
        <Header />
        <CategoriesForMen />
      </>
    </HelmetProvider>
  );
}

export default Men;
