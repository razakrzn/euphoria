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
`;
const InfoWrapper = styled.div``;

const NavigationHeadingContainer = styled.div`
  display: flex;
  gap: 30px;
`;
const NavigationHeading = styled.div``;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 18px;

  &.active {
    color: #807d7e;
    font-weight: bold;
  }

  &:hover {
    color: #3c4242;
  }
`;

const TextContainer = styled.div``;
const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0.02em;
  color: #807d7e;
`;
const TableWrapper = styled.div`
  width: 100%;
`;

const ProductDetails = styled.div`
  width: 632px;
  background-color: #f6f6f6;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-radius: 12px;
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
`;
const Category = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.02em;
  color: #807d7e;
`;
const Value = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.02em;
  color: #3c4242;
`;

export default ProductDescription;
