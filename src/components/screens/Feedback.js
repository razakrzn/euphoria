import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Slider from "react-slick";

function Feedback() {
  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
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

  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setFeedback(data.feedback);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <Stars>
        {[...Array(fullStars)].map((_, i) => (
          <Star
            key={`full-${i}`}
            src={require("../assets/star.svg").default}
            alt="filled star"
          />
        ))}
        {hasHalfStar && (
          <Star
            key="half"
            src={require("../assets/halfstar.svg").default}
            alt="half star"
          />
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <Star
            key={`empty-${i}`}
            src={require("../assets/unfilstar.svg").default}
            alt="unfilled star"
          />
        ))}
      </Stars>
    );
  };
  return (
    <>
      <Container>
        <TitleWrapper>
          <HeadIcon />
          <Heading>Feedback</Heading>
        </TitleWrapper>
        <div className="slider-container second-slider">
          <Slider {...settings2}>
            {feedback.map((item) => (
              <div key={item.id}>
                <FeedbackWrapper>
                  <Card>
                    <UserAndRating>
                      <UserImage>
                        <Image src={item.image} alt={item.name} />
                      </UserImage>
                      <StarRating rating={item.rating} />
                    </UserAndRating>
                    <TextContainer>
                      <Title>{item.name}</Title>
                      <Text>{item.comment}</Text>
                    </TextContainer>
                  </Card>
                </FeedbackWrapper>
              </div>
            ))}
          </Slider>
        </div>
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

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 60px;
  @media (max-width: 980px) {
    margin-bottom: 0;
  }
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

const FeedbackWrapper = styled.div`
  display: flex;
`;

const Card = styled.div`
  width: 100%;
  height: 257px;
  padding: 20px;
  border-radius: 10px;
  border: 1.8px solid #bebcbd;
  @media (max-width: 1280px) {
    height: 268px;
  }
  @media (max-width: 980px) {
    height: 345px;
  }
  @media (max-width: 680px) {
    padding: 15px;
    height: 258px;
  }
  @media (max-width: 480px) {
    height: 200px;
  }
  @media (max-width: 320px) {
    height: 276px;
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
const Stars = styled.span`
  display: flex;
  gap: 10px;

  @media (max-width: 980px) {
    gap: 0;
  }
`;
const Star = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
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

  @media (max-width: 680px) {
    font-size: 18px;
    margin: 10px 0;
  }
`;
const Text = styled.p`
  margin: 0px;
  color: #807d7e;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.02em;
  @media (max-width: 680px) {
    font-size: 12px;
  }
`;

export default Feedback;
