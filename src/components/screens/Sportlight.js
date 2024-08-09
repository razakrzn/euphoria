import styled from "styled-components";
import { Link } from "react-router-dom";
import bgImage from "../../components/assets/bg-1.jpg";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./SwiperStyles.css";

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
        pagination={true}
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
        <SwiperSlide>Slide 2</SwiperSlide>
      </Swiper>
    </>
  );
}

const Background = styled.div`
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  height: 716px;
`;

const Container = styled.div`
  width: 90%;
  padding: 129px 0;
  margin: 0 auto;
  max-width: 1280px;
  display: flex;
  align-items: center;
`;

const Info = styled.div`
  color: #fff;
  width: 439px;
  height: 455px;
  margin-left: 193px;
`;

const Category = styled.h5`
  color: #fff;
  font-size: 32px;
`;

const Heading = styled.h1`
  font-size: 78px;
  font-weight: 800;
  line-height: 93.62px;
  letter-spacing: 0.31476014852523804px;
  text-align: left;
`;

const Color = styled.h4`
  font-size: 32px;
  font-weight: 500;
  line-height: 47.21px;
  letter-spacing: 0.31476014852523804px;
  text-align: left;
`;

const Button = styled(Link)`
  text-decoration: none;
  background-color: #fff;
  width: 250px;
  height: 61px;
  padding: 16px 72px 16px 72px;
  border-radius: 8px;
  font-size: 24px;
  font-weight: 700;
  line-height: 28.8px;
  text-align: center;
  color: #3c4242;
`;

export default Sportlight;
