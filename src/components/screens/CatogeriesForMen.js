import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Icon } from "../assets/arrow-right.svg";

function CatogeriesForMen() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/data.json") // Adjust the path as needed
      .then((response) => response.json())
      .then((data) => {
        setItems(data.categoriesformen);
      })

      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <>
      <Container>
        <TitleWrapper>
          <HeadIcon />
          <Heading>Categories For Men</Heading>
        </TitleWrapper>
        <CardContainer>
          {items.map((item) => (
            <Card key={item.id}>
              <ImageWrapper>
                <Image src={item.image} alt={item.title} />
              </ImageWrapper>
              <InfoWrapper>
                <TextWrapper>
                  <Title>{item.title}</Title>
                  <Explore>Explore Now</Explore>
                </TextWrapper>
                <Button>
                  <IconArrow>
                    <StyledIcon />
                  </IconArrow>
                </Button>
              </InfoWrapper>
            </Card>
          ))}
        </CardContainer>
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
const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 40px;
`;

const Card = styled.div`
  flex: 1 1 calc(20% - 10px);
`;

const ImageWrapper = styled(Link)`
  width: 100%;
  text-decoration: none;
  display: inline-block;
  margin-bottom: 40px;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.1); /* Zooms the wrapper */
  }
`;
const Image = styled.img`
  width: 100%;
  display: block;
  border-radius: 10px;
`;
const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TextWrapper = styled.div``;
const Title = styled(Link)`
  display: inline-block;
  margin: 10px 0px;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  line-height: 19.2px;
  color: #3c4242;
`;
const Explore = styled.p`
  margin-top: 0px;
  color: #807d7e;
  font-size: 16px;
  font-weight: 600;
`;
const Button = styled.button`
  padding: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: transparent;
  border: none;
  width: 82.31px;
  height: 36.58px;
  cursor: pointer;
`;
const IconArrow = styled.div``;
const StyledIcon = styled(Icon)`
  width: 50px;
  height: 50px;
  fill: #797979;
  width: 17.88px;

  &:hover {
    fill: #797979; // Changes the color on hover
    transform: scale(1.1); // Slightly enlarges the icon on hover
    transition: transform 0.2s ease-in-out, fill 0.2s ease-in-out;
  }
`;
export default CatogeriesForMen;
