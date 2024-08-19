import React from "react";
import styled from "styled-components";

import bgImage1 from "../../components/assets/bg-4.jpg";
import bgImage2 from "../../components/assets/bg-5.jpg";
import { Link } from "react-router-dom";

function Promotion() {
  return (
    <>
      <Container>
        <Wrapper>
          <InfoWithBg>
            <Title>WE MADE YOUR EVERYDAY FASHION BETTER!</Title>
            <Text>
              In our journey to improve everyday fashion, euphoria presents
              EVERYDAY wear range - Comfortable & Affordable fashion 24/7
            </Text>
            <Button>Shop Now</Button>
          </InfoWithBg>
          <BgImage>
            <Image src={bgImage2} alt="Background image" />
          </BgImage>
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
  @media (max-width: 768px) {
    padding: 30px 0;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  border-radius: 10px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const InfoWithBg = styled.div`
  width: 50%;
  color: #fff;
  padding: 150px 60px;
  background-image: url(${bgImage1});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;

  @media (max-width: 1280px) {
    padding: 60px 60px;
  }
  @media (max-width: 980px) {
  }
  @media (max-width: 768px) {
    width: auto;
    border-top-right-radius: 15px;
    border-bottom-left-radius: 0;
  }
  @media (max-width: 768px) {
    padding: 30px;
  }
`;

const Title = styled.h1`
  font-size: 34px;
  margin: 0;
  font-weight: 800;
  line-height: 50px;
  @media (max-width: 680px) {
    font-size: 24px;
  }
`;

const Text = styled.h4`
  font-size: 20px;
  font-weight: 300;
  line-height: 24px;
  @media (max-width: 680px) {
    font-size: 16px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const Button = styled(Link)`
  display: inline-block;
  color: #000;
  padding: 12px 44px 12px 44px;
  border-radius: 8px;
  background-color: #fff;
  text-decoration: none;
  margin-top: 20px;
  &:hover {
    transition: all 3;
    transform: scale(1.1); /* Zooms the wrapper */
  }
  @media (max-width: 480px) {
    padding: 12px 24px 12px 24px;
    margin: 0px;
  }
`;

const BgImage = styled.div`
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  overflow: hidden;
  @media (max-width: 768px) {
    width: 100%;
    height: 320px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
  }
  @media (max-width: 680px) {
    height: 263px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media (max-width: 768px) {
    object-fit: cover;
    object-position: center 16%;
  }
`;

export default Promotion;
