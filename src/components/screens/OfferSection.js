import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import bgImage1 from "../../components/assets/bg-2.jpg";
import bgImage2 from "../../components/assets/bg-3.jpg";

function OfferSection() {
  return (
    <>
      <Container>
        <Wrapper>
          <Box>
            <Background>
              <Info>
                <Discription>Low Price</Discription>
                <Title>High Coziness</Title>
                <Offer>UPTO 50% OFF</Offer>
                <Explore>Explore Item</Explore>
              </Info>
            </Background>
          </Box>
          <Box>
            <BackgroundRight>
              <Info>
                <Discription>Beyoung Presents</Discription>
                <Title>Breezy Summer Style</Title>
                <Offer>UPTO 50% OFF</Offer>
                <Explore>Explore Item</Explore>
              </Info>
            </BackgroundRight>
          </Box>
        </Wrapper>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 1280px;
  padding: 60px 0;
  @media (max-width: 480px) {
    padding: 30px 0;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  transform: none;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const Box = styled.div`
  display: flex;
  width: 50%;
  color: #fff;
  text-decoration: none;
  @media (max-width: 480px) {
    width: 100%;
  }
`;
const Background = styled.div`
  width: 100%;
  border-radius: 12px;
  background-image: url(${bgImage1});
  background-size: 170%;
  background-position: 10% 0;
  background-repeat: no-repeat;
  box-shadow: 2px 2px 10px 0px #00000066;
`;

const Info = styled.div`
  width: 264px;
  padding: 60px 30px;
  @media (max-width: 768px) {
    padding: 30px;
  }
  @media (max-width: 680px) {
    padding: 20px;
    padding-right: 0px;
  }
`;
const Discription = styled.h6`
  margin: 0px;
  font-size: 18px;
  font-weight: 800;
  line-height: 30.07px;
  letter-spacing: 0.2505565583705902px;
`;
const Title = styled.h2`
  margin: 15px 0;
  font-size: 34px;
  font-weight: 800;
  line-height: 45.1px;
  text-align: left;
  @media (max-width: 768px) {
    margin: 10px 0;
    font-size: 28px;
  }
`;
const Offer = styled.h3`
  margin: 0px;
  margin-bottom: 30px;
  font-size: 16px;
  font-weight: 500;
  line-height: 25.06px;
  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;
const Explore = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 0px;
  display: inline-block;
  border-bottom: 1px solid #fff;
  margin: 0px;
  font-size: 20px;
  font-weight: 800;
  line-height: 30.13px;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.1); /* Zooms the wrapper */
  }
`;
const BackgroundRight = styled.div`
  width: 100%;
  border-radius: 12px;
  background-image: url(${bgImage2});
  background-size: 140%;
  background-repeat: no-repeat;
  box-shadow: 2px 2px 10px 0px #00000066;
`;

export default OfferSection;
