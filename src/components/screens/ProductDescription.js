import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function ProductDescription() {
  const productData = [
    { category: "Fabric", value: "Bio-washed Cotton" },
    { category: "Pattern", value: "Printed" },
    { category: "Fit", value: "Regular-fit" },
    { category: "Neck", value: "Round Neck" },
    { category: "Sleeve", value: "Half-sleeves" },
    { category: "Style", value: "Casual Wear" },
  ];
  return (
    <>
      <Container>
        <InfoWrapper>
          <TitleWrapper>
            <HeadIcon />
            <Heading>Product Description</Heading>
          </TitleWrapper>
          <NavigationHeadingContainer>
            <NavigationHeading>
              <StyledNavLink>Description</StyledNavLink>
            </NavigationHeading>
            <NavigationHeading>
              <StyledNavLink>User comments</StyledNavLink>
            </NavigationHeading>
            <NavigationHeading>
              <StyledNavLink>Question & Answer</StyledNavLink>
            </NavigationHeading>
          </NavigationHeadingContainer>
          <TextContainer>
            <Text>
              100% Bio-washed Cotton – makes the fabric extra soft & silky.
              Flexible ribbed crew neck. Precisely stitched with no pilling & no
              fading. Provide all-time comfort. Anytime, anywhere. Infinite
              range of matte-finish HD prints.
            </Text>
          </TextContainer>
        </InfoWrapper>
        <TableWrapper>
          <ProductDetails>
            {productData.map((item, index) => (
              <DetailItem key={index}>
                <Category>
                  <p style={{ marginTop: "0" }}>{item.category}</p>
                </Category>
                <Value>
                  <p style={{ margin: "0" }}>{item.value}</p>
                </Value>
              </DetailItem>
            ))}
          </ProductDetails>
        </TableWrapper>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 1280px;
  padding: 60px 0;
  display: flex;
  gap: 30px;
  @media (max-width: 980px) {
    flex-direction: column;
  }
  @media (max-width: 680px) {
    padding-top: 0;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
const HeadIcon = styled.span`
  width: 6px;
  height: 30px;
  border-radius: 10px;
  background-color: #8a33fd;
`;
const Heading = styled.h3`
  font-size: 34px;
  font-weight: 600;
  line-height: 33.5px;
  letter-spacing: 0.02em;
  color: #3c4242;
  @media (max-width: 680px) {
    font-size: 28px;
  }
`;
const InfoWrapper = styled.div``;

const NavigationHeadingContainer = styled.div`
  display: flex;
  gap: 30px;
  @media (max-width: 320px) {
    gap: 10px;
    text-align: center;
  }
`;
const NavigationHeading = styled.div`
  margin-bottom: 20px;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 18px;
  position: relative;
  padding-bottom: 20px;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0; /* Initially no width */
    height: 2px; /* Height of the border */
    background-color: #000000; /* Color of the border */
    transform: translateY(-50%); /* Center the border */
    transition: width 0.3s ease; /* Smooth transition for the border width */
    border-radius: 15%;
  }

  &.active {
    color: #807d7e;
    font-weight: bold;
  }

  &:hover::after,
  &:focus::after {
    width: 50%;
  }
  @media (max-width: 680px) {
    font-size: 16px;
  }
  @media (max-width: 320px) {
    font-size: 14px;
  }
`;

const TextContainer = styled.div``;
const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0.02em;
  color: #807d7e;
  @media (max-width: 680px) {
    line-height: 22px;
    font-size: 12px;
  }
`;
const TableWrapper = styled.div`
  margin: 0 auto;
`;

const ProductDetails = styled.div`
  width: 632px;
  background-color: #f6f6f6;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-radius: 12px;
  @media (max-width: 680px) {
    width: 100%;
  }
`;

const DetailItem = styled.div`
  flex: 1 1 calc(33.33% - 10px);
  padding: 20px 40px;
  box-sizing: border-box;
  border-right: 1px solid #bebcbd;
  border-bottom: 1px solid #bebcbd;
  &:nth-child(n + 4) {
    border-bottom: none;
  }
  &:nth-child(3n) {
    border-right: none;
  }
  @media (max-width: 680px) {
    padding: 10px 20px;
  }
  @media (max-width: 320px) {
    padding: 10px;
  }
`;
const Category = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.02em;
  color: #807d7e;
  @media (max-width: 320px) {
    font-size: 14px;
  }
`;
const Value = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.02em;
  color: #3c4242;
  @media (max-width: 320px) {
    font-size: 12px;
  }
`;

export default ProductDescription;
