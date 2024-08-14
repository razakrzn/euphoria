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
          <BgImage></BgImage>
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
`;

const Wrapper = styled.div`
  display: flex;
  border-radius: 10px;
`;

const InfoWithBg = styled.div`
  width: 50%;
  color: #fff;
  padding: 160px 60px;
  background-image: url(${bgImage1});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
`;

const Title = styled.h1`
  font-size: 34px;
  font-weight: 800;
  line-height: 50px;
  letter-spacing: 0.20758114755153656px;
`;

const Text = styled.h4`
  font-size: 20px;
  font-weight: 300;
  line-height: 24px;
`;

const Button = styled(Link)`
  display: inline-block;
  color: #000;
  padding: 12px 44px 12px 44px;
  border-radius: 8px;
  background-color: #fff;
  text-decoration: none;
  margin-top: 20px;
`;

const BgImage = styled.div`
  width: 50%;
  background-image: url(${bgImage2});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export default Promotion;
