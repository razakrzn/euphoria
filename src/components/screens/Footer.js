import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Footer() {
  return (
    <>
      <FooterContainer>
        <Container>
          <Wrapper>
            <MenuContainer>
              <Menu>
                <MenuItem className="item1">
                  <MenuList>
                    <MenuTitle>Need Help</MenuTitle>
                  </MenuList>
                  <MenuList>
                    <MenuLink to="#">Contact Us</MenuLink>
                  </MenuList>
                  <MenuList>
                    <MenuLink to="#">Track Order</MenuLink>
                  </MenuList>
                  <MenuList>
                    <MenuLink to="#">Returns & Refunds</MenuLink>
                  </MenuList>
                  <MenuList>
                    <MenuLink to="#">FAQ's</MenuLink>
                  </MenuList>
                  <MenuList>
                    <MenuLink to="#">Career</MenuLink>
                  </MenuList>
                </MenuItem>
                <MenuItem className="item2">
                  <MenuList>
                    <MenuTitle>Company</MenuTitle>
                  </MenuList>
                  <MenuList>
                    <MenuLink to="#">About Us</MenuLink>
                  </MenuList>{" "}
                  <MenuList>
                    <MenuLink to="#">euphoria Blog</MenuLink>
                  </MenuList>{" "}
                  <MenuList>
                    <MenuLink to="#">euphoriastan</MenuLink>
                  </MenuList>{" "}
                  <MenuList>
                    <MenuLink to="#">Collaboration</MenuLink>
                  </MenuList>
                  <MenuList>
                    <MenuLink to="#">Media</MenuLink>
                  </MenuList>
                </MenuItem>
                <MenuItem className="item3">
                  <MenuList>
                    <MenuTitle>More Info</MenuTitle>
                  </MenuList>
                  <MenuList>
                    <MenuLink to="#">Term and Conditions</MenuLink>
                  </MenuList>{" "}
                  <MenuList>
                    <MenuLink to="#">Privacy Policy</MenuLink>
                  </MenuList>{" "}
                  <MenuList>
                    <MenuLink to="#">Shipping Policy</MenuLink>
                  </MenuList>{" "}
                  <MenuList>
                    <MenuLink to="#">Sitemap</MenuLink>
                  </MenuList>
                </MenuItem>
                <MenuItem className="item4">
                  <MenuList>
                    <MenuTitle>Location</MenuTitle>
                  </MenuList>
                  <MenuList>
                    <MenuLink to="#">support@euphoria.in</MenuLink>
                  </MenuList>
                  <MenuList>
                    <MenuLink to="#">
                      Eklingpura Chouraha, Ahmedabad Main Road
                    </MenuLink>
                  </MenuList>
                  <MenuList>
                    <MenuLink to="#">
                      (NH 8- Near Mahadev Hotel) Udaipur, India- 313002
                    </MenuLink>
                  </MenuList>
                </MenuItem>
              </Menu>
            </MenuContainer>
            <MediaSection>
              <MediaWrapper>
                <SocialMediaIconContainer>
                  <Icons>
                    <MediaLinks>
                      <SocialMediaIcon>
                        <Image
                          src={require("../assets/facebook.svg").default}
                          alt="facebook"
                        />
                      </SocialMediaIcon>
                    </MediaLinks>
                    <MediaLinks>
                      <SocialMediaIcon>
                        <Image
                          src={require("../assets/instagram.svg").default}
                          alt="facebook"
                        />
                      </SocialMediaIcon>
                    </MediaLinks>
                    <MediaLinks>
                      <SocialMediaIcon>
                        <Image
                          src={require("../assets/twitter.svg").default}
                          alt="facebook"
                        />
                      </SocialMediaIcon>
                    </MediaLinks>
                    <MediaLinks>
                      <SocialMediaIcon>
                        <Image
                          src={require("../assets/linkedin.svg").default}
                          alt="facebook"
                        />
                      </SocialMediaIcon>
                    </MediaLinks>
                  </Icons>
                </SocialMediaIconContainer>
                <AppContainer>
                  <Title>Download The App </Title>
                  <AvalableApp>
                    <AppIcon>
                      <AppImage
                        src={require("../assets/playstore.svg").default}
                        alt="google play"
                      />
                    </AppIcon>
                    <TextContainer>
                      <P>android app on</P>
                      <H6
                        style={{
                          margin: "0",
                          fontSize: "18px",
                          fontWeight: 400,
                          color: "#ffffff",
                        }}
                      >
                        Google Play
                      </H6>
                    </TextContainer>
                    <AppIcon>
                      <AppImage
                        src={require("../assets/phone.svg").default}
                        alt="google play"
                      />
                    </AppIcon>
                    <TextContainer>
                      <P>Available on the</P>
                      <H6>App Store</H6>
                    </TextContainer>
                  </AvalableApp>
                </AppContainer>
              </MediaWrapper>
            </MediaSection>
            <CategorySection>
              <CategoryWrapper>
                <CategoryTitle>Popular Categories</CategoryTitle>
                <OptiomButton>
                  <OptionIcon>
                    <Arrow
                      src={require("../assets/arrow-down.svg").default}
                      alt="shoes"
                    />
                  </OptionIcon>
                </OptiomButton>
              </CategoryWrapper>
            </CategorySection>
            <BottomWrapper>
              <Info>
                Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.
              </Info>
            </BottomWrapper>
          </Wrapper>
        </Container>
      </FooterContainer>
    </>
  );
}
const FooterContainer = styled.footer`
  background: #3c4242;
  gap: 0px;
  opacity: 0px;
`;

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 1280px;
  padding: 60px 0;
  @media (max-width: 980px) {
    padding: 30px 0;
  }
`;
const Wrapper = styled.div``;
const MenuContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 1280px;
  @media (max-width: 980px) {
    width: 90%;
  }
`;
const Menu = styled.div`
  display: flex;
  gap: 40px;
  justify-content: space-between;
  @media (max-width: 980px) {
    gap: 35px;
  }
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 20px;

    & > ul:last-child {
      // width: 63%;
    }
  }
  @media (max-width: 680px) {
    text-align: center;
  }
`;
const MenuItem = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  color: #f6f6f6;
  @media (max-width: 768px) {
    width: calc(50% - 10px);
    }
  }
`;
const MenuList = styled.li``;
const MenuTitle = styled.h3`
  font-size: 28px;
  font-weight: 700;
  line-height: 61.99px;
  margin: 0;

  @media (max-width: 980px) {
    font-size: 24px;
  }
  @media (max-width: 480px) {
    font-size: 22px;
  }
`;
const MenuLink = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  line-height: 38px;
  text-decoration: none;
  color: #f6f6f6;
  @media (max-width: 680px) {
    line-height: 32px;
    font-size: 14px;
    text-align: left;
  }
`;
const MediaSection = styled.div`
  border-bottom: 1px solid #bebcbd;
`;
const MediaWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
  @media (max-width: 680px) {
    flex-direction: column;
    justify-content: center;
  }
`;
const SocialMediaIconContainer = styled.div`
  display: flex;
  @media (max-width: 680px) {
    justify-content: center;
  }
`;
const Icons = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 20px;
  @media (max-width: 680px) {
  }
`;
const MediaLinks = styled(Link)``;
const SocialMediaIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 37px;
  height: 37px;
  border-radius: 10px;
  background: #f6f6f6;
  &:hover {
    background: #cccccc;
  }
`;
const Image = styled.img``;
const AppContainer = styled.div``;
const AvalableApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const Title = styled.h2`
  font-size: 28.58px;
  font-weight: 700;
  color: #f6f6f6;
  @media (max-width: 680px) {
    text-align: center;
  }
`;
const AppIcon = styled(Link)``;
const AppImage = styled.img`
  width: 100%;
  display: block;
`;
const TextContainer = styled(Link)`
  text-decoration: none;
`;
const P = styled.p`
  color: #ffffff;
  margin: 0px;
  font-size: 10px;
  font-weight: 400;
`;
const H6 = styled.h6`
  color: #ffffff;
  margin: 0px;
  font-size: 18px;
  font-weight: 400;
`;
const CategorySection = styled.div`
  border-bottom: 1px solid #bebcbd;
`;

const CategoryWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 980px) {
    width: 90%;
  }
`;
const CategoryTitle = styled.h2`
  font-size: 28.58px;
  font-weight: 700;
  color: #f6f6f6;
  @media (max-width: 768px) {
    font-size: 24px;
  }
  @media (max-width: 680px) {
    font-size: 18px;
  }
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;
const OptiomButton = styled.button`
  border: none;
  background: none;
`;
const OptionIcon = styled.span``;
const Arrow = styled.img`
  width: 100%;
  display: block;
`;
const BottomWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 1280px;
`;
const Info = styled.p`
  margin: 0;
  padding-top: 60px;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  color: #ffffff;
  @media (max-width: 980px) {
    padding-top: 30px;
  }
  @media (max-width: 680px) {
    font-size: 14px;
  }
`;

export default Footer;
