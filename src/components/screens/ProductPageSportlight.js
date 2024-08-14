import React from "react";
import Header from "../includes/Header";
import { Link, NavLink, useParams } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";

function ProductPageSportlight() {
  const { id } = useParams();
  console.log({ id }); // Check if id is defined

  const [productDetails, setProductDetails] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProductDetails(data.productdetails);
        console.log(data.productdetails);
        const product = data.productdetails.find((item) => item.id === id);
        if (product) {
          setSelectedImage(product.image);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <>
      <Container>
        {productDetails.map((item) => (
          <Wrapper key={item.id}>
            <ImageSection>
              <LeftImgCategory>
                <ImageCategoryWrapper>
                  {item.images.map((image, index) => (
                    <ImageItem key={index}>
                      <ImageLink onClick={() => handleImageClick(image)}>
                        <Image src={image} alt={item.title} />
                      </ImageLink>
                    </ImageItem>
                  ))}
                </ImageCategoryWrapper>
              </LeftImgCategory>
              <MainImageWrapper>
                <MainImage src={selectedImage || item.image} alt={item.title} />
              </MainImageWrapper>
            </ImageSection>
            <ProductInfo>
              <ProductInfoWrapper>
                <MenuContainer>
                  <Navlink to="/">
                    <Span>Shop</Span>
                    <Span>
                      <StyledImage
                        src={require("../assets/right-arrow-light.svg").default}
                        alt="arrow"
                      />
                    </Span>
                  </Navlink>
                  <Navlink to={`/product/${id}`}>
                    <Span>Women</Span>
                    <Span>
                      <StyledImage
                        src={require("../assets/right-arrow-light.svg").default}
                        alt="arrow"
                      />
                    </Span>
                  </Navlink>
                  <Navlink>
                    <Span>Top</Span>
                  </Navlink>
                </MenuContainer>
                <Title>{item.title}</Title>
                <Ratig>
                  <RatingValue>{item.rating}</RatingValue>
                  <CommentIcon>
                    <img
                      src={require("../assets/message.svg").default}
                      alt="arrow"
                    />
                  </CommentIcon>
                  <CommentCount>{item.comments} Comments</CommentCount>
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
                    {item.sizes.map((size) => (
                      <SizeButton key={size}>{size}</SizeButton> // Use item.sizes to render sizes
                    ))}
                  </SizeOptions>
                </SizeSelection>
                <ColorOption>
                  <ColorSpan>Colours Available</ColorSpan>
                  <ColorButtonsContainer>
                    {item.colors.map((color) => (
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
                        alt="arrow"
                      />
                    </span>
                    <span>Add to Cart</span>
                  </CartButton>
                  <PriceSpan>${item.price}</PriceSpan>
                </PriceAndCartContiner>
              </ProductInfoWrapper>
              <ProductShipingDetails>
                <ShippingInfo>
                  <Item>
                    <ShippingIcon>
                      <img
                        src={require("../assets/credit card.svg").default}
                        alt="shipping"
                      />
                    </ShippingIcon>
                    <ShippingText>Secure payment</ShippingText>
                  </Item>
                  <Item>
                    <ShippingIcon>
                      <img
                        src={require("../assets/Size&Fit.svg").default}
                        alt="shipping"
                      />
                    </ShippingIcon>
                    <ShippingText>Size & Fit</ShippingText>
                  </Item>
                  <Item>
                    <ShippingIcon>
                      <img
                        src={require("../assets/truck.svg").default}
                        alt="shipping"
                      />
                    </ShippingIcon>
                    <ShippingText>Free shipping</ShippingText>
                  </Item>
                  <Item>
                    <ShippingIcon>
                      <img
                        src={
                          require("../assets/Free-Shipping&Returns.svg").default
                        }
                        alt="shipping"
                      />
                    </ShippingIcon>
                    <ShippingText>Free Shipping & Returns</ShippingText>
                  </Item>
                </ShippingInfo>
              </ProductShipingDetails>
            </ProductInfo>
          </Wrapper>
        ))}
      </Container>
    </>
  );
}

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  gap: 50px;
`;

const ImageSection = styled.div`
  padding-left: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  background: #f6f6f6;
`;

const LeftImgCategory = styled.div``;

const ImageCategoryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 20px;
`;

const ImageItem = styled.div`
  width: 68px;
  height: 68px;
  border-radius: 9px;
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
  text-decoration: none;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 9px;
`;

const MainImageWrapper = styled.div`
  width: 520px;
  height: 785px;
`;

const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const ProductInfo = styled.div`
  width: 534px;
  margin-right: 80px;
`;

const ProductInfoWrapper = styled.div`
  padding: 40px 0;
  border-bottom: 1px solid #bebcbd;
`;

const MenuContainer = styled.div`
  display: flex;
  gap: 20px;
`;
const Navlink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
`;
const Span = styled.span`
  font-size: 18px;
  font-weight: 500;
  line-height: 21.6px;
  margin-right: 5px;
  color: #807d7e;
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
`;

const Ratig = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const RatingValue = styled.span``;

const CommentIcon = styled.span``;

const CommentCount = styled.span``;

const SizeSelection = styled.div`
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
  margin: 20px 0;
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
  margin-left: 0px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  &:hover,
  &:focus {
    border-radius: 50%;
    width: 30px;
    height: 30px;
    border: 1px solid #3f4646;
    border-radius: 50%;
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
`;

const Item = styled(Link)`
  text-decoration: none;
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

const ShippingText = styled.span`
  font-size: 18px;
  font-weight: 500;
  line-height: 21.6px;
  color: #3c4242;
`;

export default ProductPageSportlight;
