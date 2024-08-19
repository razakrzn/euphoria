import React from "react";
import Header from "../includes/Header";
import { Helmet, HelmetProvider } from "react-helmet-async";
import CategoriesForWomen from "../screens/CategoriesForWomen";

function Women() {
  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>Product Detail Page | Women</title>
        </Helmet>
        <Header />
        <CategoriesForWomen />
      </>
    </HelmetProvider>
  );
}

export default Women;
