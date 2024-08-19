import ProductPageSportlight from "./ProductPageSportlight";
import ProductDescription from "./ProductDescription";
import SimilarProducts from "./SimilarProducts";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Footer from "./Footer";
import Header from "../includes/Header";

const ProductDetails = () => {
  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>Product Detail Page</title>
        </Helmet>
        <Header />
        <ProductPageSportlight />
        <ProductDescription />
        <SimilarProducts />
        <Footer />
      </>
    </HelmetProvider>
  );
};

export default ProductDetails;
