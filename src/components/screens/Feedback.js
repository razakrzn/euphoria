import React from "react";
import styled from "styled-components";

import Slider from "react-slick";

function Feedback() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: true,
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
        <TitleWrapper>
          <HeadIcon />
          <Heading>Feedback</Heading>
        </TitleWrapper>
        <FeedbackWrapper className="slider-container">
          <Slider {...settings}>
            <CustomSlide>
              <Card>
                <UserAndRating>
                  <UserImage>
                    <Image
                      src={require("../assets/span-1.svg").default}
                      alt="user"
                    />
                  </UserImage>
                  <Rating>
                    <Stars>
                      <Star
                        src={require("../assets/star.svg").default}
                        alt="star"
                      />
                      <Star
                        src={require("../assets/star.svg").default}
                        alt="star"
                      />
                      <Star
                        src={require("../assets/star.svg").default}
                        alt="star"
                      />
                      <Star
                        src={require("../assets/star.svg").default}
                        alt="star"
                      />
                    </Stars>
                  </Rating>
                </UserAndRating>
                <TextContainer>
                  <Title>Floyd Miles</Title>
                  <Text>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </Text>
                </TextContainer>
              </Card>
            </CustomSlide>
            <CustomSlide>
              <Card>
                <UserAndRating>
                  <UserImage>
                    <Image
                      src={require("../assets/span-2.svg").default}
                      alt="user"
                    />
                  </UserImage>
                  <Rating>
                    <Stars>
                      <Star
                        src={require("../assets/star.svg").default}
                        alt="star"
                      />
                      <Star
                        src={require("../assets/star.svg").default}
                        alt="star"
                      />
                      <Star
                        src={require("../assets/star.svg").default}
                        alt="star"
                      />
                      <Star
                        src={require("../assets/star.svg").default}
                        alt="star"
                      />
                    </Stars>
                  </Rating>
                </UserAndRating>
                <TextContainer>
                  <Title>Ronald Richards</Title>
                  <Text>
                    ullamco est sit aliqua dolor do amet sint. Velit officia
                    consequat duis enim velit mollit. Exercitation veniam
                    consequat sunt nostrud amet.
                  </Text>
                </TextContainer>
              </Card>
            </CustomSlide>
            <CustomSlide>
              <Card className="last-child">
                <UserAndRating>
                  <UserImage>
                    <Image
                      src={require("../assets/span-3.svg").default}
                      alt="user"
                    />
                  </UserImage>
                  <Rating>
                    <Stars>
                      <Star
                        src={require("../assets/star.svg").default}
                        alt="star"
                      />
                      <Star
                        src={require("../assets/star.svg").default}
                        alt="star"
                      />
                      <Star
                        src={require("../assets/star.svg").default}
                        alt="star"
                      />
                      <Star
                        src={require("../assets/star.svg").default}
                        alt="star"
                      />
                    </Stars>
                  </Rating>
                </UserAndRating>
                <TextContainer>
                  <Title>Savannah Nguyen</Title>
                  <Text>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </Text>
                </TextContainer>
              </Card>
            </CustomSlide>
          </Slider>
        </FeedbackWrapper>

        <FeedbackWrapper></FeedbackWrapper>
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

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 60px;
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

const FeedbackWrapper = styled.div``;
const CustomSlide = styled.div``;

const Card = styled.div`
  margin-right: 20px;
  height: 244px;
  padding: 23px;
  border-radius: 10px;
  border: 1.8px solid #bebcbd;
  &.last-child {
    margin-right: 0px;
  }
`;
const UserAndRating = styled.div`
  display: flex;
  justify-content: space-between;
`;
const UserImage = styled.span``;
const Image = styled.img`
  width: 100%;
  display: block;
`;
const Rating = styled.div``;
const Stars = styled.span`
  display: flex;
  gap: 10px;
`;
const Star = styled.img`
  width: 100%;
  display: block;
`;
const TextContainer = styled.div`
  width: 100%;
`;
const Title = styled.h5`
  margin: 20px 0;
  color: #3c4242;
  font-size: 22px;
  font-weight: 500;
  line-height: 21.6px;
  letter-spacing: 0.02em;
`;
const Text = styled.p`
  margin-bottom: 0;
  color: #807d7e;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.02em;
`;

export default Feedback;
