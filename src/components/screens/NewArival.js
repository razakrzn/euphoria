import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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

  return (
    <div>
      <Container>
        <HeadWrapper>
          <HeadIcon />
          <Heading>New Arrivals</Heading>
        </HeadWrapper>
        <Slider>
          <Button>
            <Image
              src={require("../../components/assets/arrow-left.svg").default}
            />
          </Button>
          {items.map((item) => (
            <Card key={item.id}>
              <ImageWrapper>
                <Image src={item.image} alt={item.title} />
              </ImageWrapper>
              <Title>{item.title}</Title>
            </Card>
          ))}
          <Button>
            <Image
              src={require("../../components/assets/arrow-right.svg").default}
            />
          </Button>
        </Slider>
      </Container>
    </div>
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
const Slider = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Button = styled.button`
  background-color: transparent;
  border: none;
`;

const Card = styled(Link)`
  text-decoration: none;
`;
const ImageWrapper = styled.div``;
const Image = styled.img`
  // width: 100%;
  // display: block;
`;
const Title = styled.h6`
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.01em;
  color: #3c4242;
`;

export default NewArival;
