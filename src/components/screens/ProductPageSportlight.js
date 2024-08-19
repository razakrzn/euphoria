import React from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";

function ProductPageSportlight() {
  const { id } = useParams();

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const productId = Number(id);
        const product = data.productdetails.find(
          (item) => item.id === productId
        );

        if (product) {
          setSelectedProduct(product);
          setSelectedImage(product.image);
        } else {
          console.error("Product not found");
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  if (!selectedProduct) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Wrapper>
        <ImageSection>
          <LeftImgCategory>
            <ImageCategoryWrapper>
              {selectedProduct.images.map((image, index) => (
                <ImageItem key={index}>
                  <ImageLink onClick={() => handleImageClick(image)}>
                    <Image src={image} alt={selectedProduct.title} />
                  </ImageLink>
                </ImageItem>
              ))}
            </ImageCategoryWrapper>
          </LeftImgCategory>
          <MainImageWrapper>
            <MainImage
              src={selectedImage || selectedProduct.image}
              alt={selectedProduct.title}
            />
          </MainImageWrapper>
        </ImageSection>
        <ProductInfo>
          <ProductInfoWrapper>
            <MenuContainer>
              <Navlink to="/">
                <p>Shop</p>
                <Span>
                  <StyledImage
                    src={require("../assets/right-arrow-light.svg").default}
                    alt="arrow"
                  />
                </Span>
              </Navlink>
              <Navlink>
                <p>{selectedProduct.category}</p>
                <Span>
                  <StyledImage
                    src={require("../assets/right-arrow-light.svg").default}
                    alt="arrow"
                  />
                </Span>
              </Navlink>
              <Navlink>
                <p>Top</p>
              </Navlink>
            </MenuContainer>
            <Title>{selectedProduct.title}</Title>
            <Ratig>
              <RatingValue>{selectedProduct.rating}</RatingValue>
              <CommentIcon>
                <img
                  src={require("../assets/message.svg").default}
                  alt="comments"
                />
              </CommentIcon>
              <CommentCount>{selectedProduct.comments} Comments</CommentCount>
            </Ratig>
            <SizeSelection>
              <SizeSpan>Select Size</SizeSpan>
              <SizeGuidSpan>Size Guide</SizeGuidSpan>
              <span>
                <img
                  src={require("../assets/arrow-right.svg").default}
                  alt="arrow"
                />
              </span>
              <SizeOptions>
                {selectedProduct.sizes.map((size) => (
                  <SizeButton key={size}>{size}</SizeButton>
                ))}
              </SizeOptions>
            </SizeSelection>
            <ColorOption>
              <ColorSpan>Colours Available</ColorSpan>
              <ColorButtonsContainer>
                {selectedProduct.colors.map((color) => (
                  <CustomPadding key={color}>
                    <ColorButton color={color} />
                  </CustomPadding>
                ))}
              </ColorButtonsContainer>
            </ColorOption>
            <PriceAndCartContiner>
              <CartButton>
                <span
                  style={{
                    marginRight: "10px",
                    width: "14px",
                    height: "14px",
                  }}
                >
                  <img
                    src={require("../assets/cart-1.svg").default}
                    alt="cart"
                  />
                </span>
                <span>Add to Cart</span>
              </CartButton>
              <PriceSpan>${selectedProduct.price}</PriceSpan>
            </PriceAndCartContiner>
          </ProductInfoWrapper>
          <ProductShipingDetails>
            <ShippingInfo>
              <Item>
                <ShippingIcon>
                  <img
                    src={require("../assets/credit card.svg").default}
                    alt="secure payment"
                  />
                </ShippingIcon>
                <Text>Secure payment</Text>
              </Item>
              <Item>
                <ShippingIcon>
                  <img
                    src={require("../assets/Size&Fit.svg").default}
                    alt="size & fit"
                  />
                </ShippingIcon>
                <Text>Size & Fit</Text>
              </Item>
              <Item>
                <ShippingIcon>
                  <img
                    src={require("../assets/truck.svg").default}
                    alt="free shipping"
                  />
                </ShippingIcon>
                <Text>Free shipping</Text>
              </Item>
              <Item>
                <ShippingIcon>
                  <img
                    src={require("../assets/Free-Shipping&Returns.svg").default}
                    alt="free shipping & returns"
                  />
                </ShippingIcon>
                <Text>Free Shipping & Returns</Text>
              </Item>
            </ShippingInfo>
          </ProductShipingDetails>
        </ProductInfo>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  @media (max-width: 980px) {
    width: 90%;
    margin: 0 auto;
    max-width: 1280px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  gap: 50px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageSection = styled.div`
  padding-left: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  background: #f6f6f6;
  @media (max-width: 980px) {
    padding-left: 0;
    flex-direction: column-reverse;
    background: #fff;
  }
`;

const LeftImgCategory = styled.div``;

const ImageCategoryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 980px) {
    flex-direction: row;
  }
`;

const ImageItem = styled.div`
  width: 68px;
  height: 68px;
  border-radius: 9px;
  overflow: hidden;
  transition: all 0.3s ease;
  &:hover,
  &:focus {
    transform: scale(1.1);
    padding: 8px;
    border-radius: 12px;
    border: 1px solid #3c4242;
  }
`;

const ImageLink = styled(Link)`
  display: inline;
  text-decoration: none;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const MainImageWrapper = styled.div`
  width: 520px;
  height: 100%;
  overflow: hidden;
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.1);
  display: block;
`;

const ProductInfo = styled.div`
  width: 534px;
  margin-right: 80px;
  @media (max-width: 980px) {
    margin: 0;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ProductInfoWrapper = styled.div`
  padding: 40px 0;
  border-bottom: 1px solid #bebcbd;
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;
const Navlink = styled(NavLink)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  p {
    margin: 0;
    font-size: 18px;
    font-weight: 500;
    line-height: 21.6px;
    margin-right: 5px;
    color: #807d7e;
  }
`;
const Span = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
`;

const StyledImage = styled.img`
  width: 14px;
  height: 14px;
`;

const Title = styled.h1`
  width: 393px;
  font-size: 34px;
  font-weight: 600;
  line-height: 47.6px;
  @media (max-width: 980px) {
    font-size: 28px;
    width: auto;
  }
  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

const Ratig = styled.div`
  display: flex;
  gap: 10px;
`;

const RatingValue = styled.span``;

const CommentIcon = styled.span``;

const CommentCount = styled.span``;

const SizeSelection = styled.div`
  width: 100%;
  margin: 40px 0;
`;

const SizeSpan = styled.span`
  font-size: 18px;
  font-weight: 600;
  line-height: 21.6px;
  text-align: left;
  color: #3f4646;
  margin-right: 20px;
`;

const SizeGuidSpan = styled.span`
  font-size: 18px;
  font-weight: 500;
  line-height: 21.6px;
  margin-right: 20px;
  color: #807d7e;
`;

const SizeOptions = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  @media (max-width: 320px) {
    justify-content: space-between;
  }
`;

const SizeButton = styled.button`
  background-color: transparent;
  width: 38px;
  height: 38px;
  border-radius: 12px;
  border: 1.5px solid #bebcbd;
  margin-right: 20px;
  transition: all 0.3s ease;
  &:hover,
  &:focus {
    background: #3c4242;
    color: #ffffff;
    border: none;
  }
  @media (min-width: 320px) {
    margin-right: 10px;
  }
`;

const ColorOption = styled.div`
  margin: 40px 0;
`;

const ColorSpan = styled.span`
  font-size: 18px;
  font-weight: 600;
  line-height: 21.6px;
`;

const ColorButtonsContainer = styled.div``;
const CustomPadding = styled.span`
  margin: 20px;
  width: 30px;
  height: 30px;
  margin-left: 0px;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  &:hover,
  &:active,
  &:focus {
    border: 1px solid #3f4646;
    outline: none;
  }
`;

const ColorButton = styled.button`
  border: none;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${(props) => props.color};
`;

const PriceAndCartContiner = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: row-reverse;
  }
  @media (max-width: 320px) {
    justify-content: space-between;
  }
`;

const CartButton = styled.button`
  font-size: 18px;
  font-weight: 600;
  line-height: 21.6px;
  text-align: center;
  color: #fff;
  background-color: #8a33fd;
  border: none;
  padding: 12px 40px 12px 40px;
  border-radius: 8px;
  cursor: pointer;

  @media (max-width: 320px) {
    padding: 12px 20px 12px 20px;
    font-size: 14px;
  }
`;

const PriceSpan = styled.button`
  background-color: transparent;
  font-size: 18px;
  font-weight: 700;
  line-height: 21.6px;
  text-align: center;
  padding: 12px 40px 12px 40px;
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid #3c4242;
`;

const ProductShipingDetails = styled.div`
  padding: 40px 0;
`;

const ShippingInfo = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  @media (max-width: 980px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 320px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Item = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
`;

const ShippingIcon = styled.span`
  margin-right: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: #f6f6f6;
  border-radius: 50%;
`;

const Text = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 21.6px;
  color: #3c4242;
`;

export default ProductPageSportlight;
