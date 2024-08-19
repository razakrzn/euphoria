import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function BrandsDeal() {
  return (
    <>
      <Container>
        <Background>
          <Title>Top Brands Deal</Title>
          <Text>
            Up To <Span>60% </Span>off on brands
          </Text>
          <LogoGrid>
            <LogoItem>
              <Logo src={require("../assets/nike.jpg")} alt="Nike" />
            </LogoItem>
            <LogoItem>
              <Logo src={require("../assets/H&M.jpg")} alt="H&M" />
            </LogoItem>
            <LogoItem>
              <Logo src={require("../assets/levis.jpg")} alt="Livis" />
            </LogoItem>
            <LogoItem>
              <Logo src={require("../assets/USPA.jpg")} alt="USPA" />
            </LogoItem>
            <LogoItem>
              <Logo src={require("../assets/puma.jpg")} alt="Puma" />
            </LogoItem>
          </LogoGrid>
        </Background>
      </Container>
    </>
  );
}
const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 1280px;
  padding: 60px 0;

  @media (max-width: 980px) {
    padding: 30px 0;
  }
`;
const Background = styled.div`
  border: 1px solid #323232;
  background: #3c4242;
  border-radius: 12px;
  padding: 30px 0;
`;
const Title = styled.h3`
  color: #ffffff;
  font-size: 48px;
  text-align: center;
  font-weight: 800;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 34px;
  }
  @media (max-width: 480px) {
    font-size: 28px;
  }
`;
const Text = styled.p`
  color: #ffffff;
  margin: 40px 0;
  font-size: 22px;
  font-weight: 400;
  text-align: center;
  @media (max-width: 680px) {
    margin: 20px 0;
  }
  @media (max-width: 480px) {
    font-size: 18px;
  }
`;
const Span = styled.span`
  color: #fbd103;
  font-size: 22px;
  font-weight: 700;
`;
const LogoGrid = styled.div`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0 40px;
  gap: 20px;
  #background: #ffffff;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;
const LogoItem = styled(Link)`
  width: calc(20% - 10px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding: 20px 40px;
  border-radius: 12px;
  &:focus,
  &:hover {
    fill: #797979; // Changes the color on hover
    transform: scale(1.1);
    transition: transform 0.2s ease-in-out, fill 0.2s ease-in-out;
  }
  @media (max-width: 680px) {
    padding: 10px 20px;
  }
`;
const Logo = styled.img`
  width: 100%;
  display: block;
  @media (max-width: 680px) {
  }
`;

export default BrandsDeal;
