import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NewArival() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/data.json") // Adjust the path as needed
      .then((response) => response.json())
      .then((data) => {
        setItems(data.newarival);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Container>
        <HeadWrapper>
          <HeadIcon />
          <Heading>New Arrivals</Heading>
        </HeadWrapper>
        <SliderContainer>
          <Slider {...settings}>
            {items.map((item) => (
              <Card key={item.id}>
                <ImageWrapper>
                  <Image src={item.image} alt={item.title} />
                </ImageWrapper>
                <Title>{item.title}</Title>
              </Card>
            ))}
          </Slider>
        </SliderContainer>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 1280px;
`;
const HeadWrapper = styled.div`
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
`;

const Card = styled.div``;
const ImageWrapper = styled(Link)`
  text-decoration: none;
  width: 262.81px;
  height: 262.81px;
  border-radius: 12px;
`;
const Image = styled.img`
  width: 100%;
  display: block;
`;
const Title = styled.h6`
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.01em;
  color: #3c4242;
`;

const SliderContainer = styled.div`
  position: relative;
  margin: 0 auto;
`;

const CustomArrow = styled.div`
  position: absolute;
  top: 30%;
  transform: translateY(50%);
  z-index: 1;
  cursor: pointer;
`;

const SamplePrevArrow = (props) => {
  const { style, onClick } = props;
  return (
    <CustomArrow
      className="custom-prev"
      style={{ ...style, left: "0" }} /* Position on the left side */
      onClick={onClick}
    >
      <img src={require("../assets/arrow-left.svg").default} alt="Previous" />
    </CustomArrow>
  );
};

const SampleNextArrow = (props) => {
  const { style, onClick } = props;
  return (
    <CustomArrow
      className="custom-next"
      style={{ ...style, right: "0" }} /* Position on the right side */
      onClick={onClick}
    >
      <img src={require("../assets/arrow-right.svg").default} alt="Next" />
    </CustomArrow>
  );
};

export default NewArival;
