import styled from "styled-components";
import { Link } from "react-router-dom";
import bgImage from "../../components/assets/bg-1.jpg";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

function Sportlight() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={{ clickable: true }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Background>
            <Container>
              <Info>
                <Category>T-shirt/Tops</Category>
                <Heading>Summer Value Pack</Heading>
                <Color>cool / colorful / comfy</Color>
                <Button>Shop Now</Button>
              </Info>
            </Container>
          </Background>
        </SwiperSlide>
        <SwiperSlide style={{ background: "#F6F6F6" }}>Slide 2</SwiperSlide>
      </Swiper>
    </>
  );
}

const Background = styled.div`
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  height: 716px;
  @media (max-width: 768px) {
    padding: 60px 0;
    height: 100%;
  }
`;

const Container = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  max-width: 1280px;
  display: flex;
  align-items: center;
`;

const Info = styled.div`
  max-width: 1230px;
  width: 90%;
  margin: 0 auto;
  color: #fff;
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Category = styled.h5`
  margin: 0;
  font-size: 32px;
  font-weight: 500;
  line-height: 37.77px;
  letter-spacing: 0.15738007426261902px;
  text-align: left;

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const Heading = styled.h1`
  width: 439px;
  margin: 20px 0;
  font-size: 78px;
  font-weight: 800;
  line-height: 93.62px;
  letter-spacing: 0.31476014852523804px;
  text-align: left;
  @media (max-width: 768px) {
    font-size: 54px;
    line-height: 68px;
    width: 350px;
  }
  @media (max-width: 480px) {
    width: 250px;
    line-height: 42px;
    font-size: 42px;
  }
`;

const Color = styled.h4`
  margin: 0;
  margin-bottom: 40px;
  font-size: 32px;
  font-weight: 500;
  line-height: 47.21px;
  letter-spacing: 0.31476014852523804px;
  text-align: left;

  @media (max-width: 768px) {
    margin: 0;
    margin-bottom: 30px;
  }
  @media (max-width: 480px) {
    font-size: 24px;
    margin-bottom: 15px;
  }
`;

const Button = styled(Link)`
  display: inline-block;
  text-decoration: none;
  background-color: #fff;
  padding: 16px 72px 16px 72px;
  border-radius: 8px;
  font-size: 24px;
  font-weight: 700;
  line-height: 28.8px;
  text-align: center;
  color: #3c4242;
  @media (max-width: 768px) {
    font-size: 16px;
    padding: 10px 40px;
  }
  @media (max-width: 480px) {
    padding: 8px 20px;
  }
`;

export default Sportlight;
