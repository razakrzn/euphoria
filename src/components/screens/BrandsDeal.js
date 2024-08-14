import React from "react";
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
`;
const Background = styled.div`
  border: 1px solid #323232;
  background: #3c4242;
  border-radius: 12px;
  padding: 40px 0;
`;
const Title = styled.h3`
  color: #ffffff;
  font-size: 50px;
  text-align: center;
  font-weight: 800;
  margin: 0;
`;
const Text = styled.p`
  color: #ffffff;
  margin: 40px 0;
  font-size: 22px;
  font-weight: 400;
  text-align: center;
`;
const Span = styled.span`
  color: #fbd103;
  font-size: 22px;
  font-weight: 700;
`;
const LogoGrid = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  gap: 20px;
  #background: #ffffff;
`;
const LogoItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  width: 177.52px;
  height: 85.55px;
  border-radius: 12px;
`;
const Logo = styled.img`
  width: initial;
  display: block;
`;

export default BrandsDeal;
