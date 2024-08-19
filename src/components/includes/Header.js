import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import menuIcon from "../../components/assets/menubutton.svg";
import closeIcon from "../../components/assets/closebutton.svg";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <HeaderContainer>
        <HeaderWrapper>
          <LogoContainer className="item">
            <LogoLink to="/">
              <h1 style={{ display: "block", width: "91px" }}>
                <Image
                  src={require("../../components/assets/Logo.svg").default}
                  alt="Logo image"
                />
              </h1>
            </LogoLink>
          </LogoContainer>
          <Navbar $isOpen={isOpen}>
            <LogoContainer className="hidden">
              <LogoLink to="/">
                <h1 style={{ display: "block", width: "91px" }}>
                  <Image
                    src={require("../../components/assets/Logo.svg").default}
                    alt="Logo image"
                  />
                </h1>
              </LogoLink>
            </LogoContainer>
            <Menu className="item2">
              <MenuItem>
                <MenuLink to="/" activeClassName="active">
                  Shop
                </MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink to="/men" activeClassName="active">
                  Men
                </MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink to="/women" activeClassName="active">
                  Women
                </MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink to="#" activeClassName="active">
                  Combos
                </MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink to="#" activeClassName="active">
                  Joggers
                </MenuLink>
              </MenuItem>
            </Menu>
          </Navbar>
          <MenuButtonContainer>
            <MenuButton onClick={toggleMenu}>
              <span>
                <MenuIcon
                  src={isOpen ? closeIcon : menuIcon}
                  alt={isOpen ? "Close menu" : "Open menu"}
                />
              </span>
            </MenuButton>
          </MenuButtonContainer>
          <SearchBar className="item-move">
            <Button>
              <SearchIcon
                src={require("../../components/assets/search.svg").default}
              />
            </Button>
            <Input placeholder="Search" />
          </SearchBar>

          <UserContainer className="item3">
            <UserMenu>
              <UserButton>
                <UserIconContainer>
                  <UserIcon
                    src={
                      require("../../components/assets/wishlist.svg").default
                    }
                    alt="User icon"
                  />
                </UserIconContainer>
              </UserButton>
              <UserButton>
                <UserIconContainer>
                  <UserIcon
                    src={require("../../components/assets/account.svg").default}
                    alt="User icon"
                  />
                </UserIconContainer>
              </UserButton>
              <UserButton>
                <UserIconContainer>
                  <UserIcon
                    src={require("../../components/assets/cart.svg").default}
                    alt="User icon"
                  />
                </UserIconContainer>
              </UserButton>
            </UserMenu>
          </UserContainer>
        </HeaderWrapper>
      </HeaderContainer>
    </>
  );
}
const HeaderContainer = styled.header`
  display: flex;
  height: 108px;
  border-bottom: 1px solid #bebcbd;

  @media (max-width: 980px) {
    height: auto;
  }
`;

const HeaderWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  align-items: center;
  @media (max-width: 980px) {
    flex-wrap: wrap;
    justify-content: flex-start;
    position: relative;
    .item-move {
      flex-basis: 100%;
      margin-bottom: 20px;
    }
    .item3 {
      position: absolute;
      right: 0;
      transform: translate(-0%, -80%);
    }
  }

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
  // @media (max-width: 680px) {
  //   .item-move {
  //     // flex: 1;
  //     margin-bottom: 0px;
  //   }
  }
`;

const LogoContainer = styled.div`
  &.hidden {
    display: none;
  }
  @media (max-width: 680px) {
    margin-left: 50px;
    &.hidden {
      display: block;
    }
  }
`;

const LogoLink = styled(Link)`
  text-decoration: none;
  display: inline-block;
`;

const Image = styled.img`
  width: 100%;
  display: block;
`;

const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
  transition: background-color 3.3s ease, transform 2.3s ease, opacity 2.3s ease,
    visibility 0s 2.3s;

  @media (max-width: 980px) {
    margin-left: 100px;
  }
  @media (max-width: 768px) {
    margin-left: 0;
  }
  @media (max-width: 680px) {
    flex-direction: ${({ $isOpen }) => ($isOpen ? "column" : "row")};
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
    gap: 0px;
    background-color: #f6f6f6;
    position: absolute;
    top: 0;
    left: -1rem;
    padding: 20px;
    width: 50%;
    transform: ${({ $isOpen }) => ($isOpen ? "scale(1.1)" : "scale(0.9)")};
    height: 100vh;
    z-index: 2;
  }
`;
const Menu = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0px;
  gap: 40px;
  @media (max-width: 980px) {
    padding: 0 30px;
  }
  @media (max-width: 680px) {
    flex-direction: column;
  }
  @media (max-width: 320px) {
    flex-direction: column;
    gap: 20px;
  }
`;
const MenuItem = styled.li``;
const MenuLink = styled(NavLink)`
  color: #807d7e;
  text-decoration: none;

  &:hover,
  &:focus {
    color: #3c4242;
  }

  &.active {
    color: #3c4242;
  }
`;
const MenuButtonContainer = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    position: absolute;
    top: 2rem;
    lef: 0;
    z-index: 2;
  }
`;

const MenuButton = styled.button`
  padding: 0;
  width: 20px;
  height: 20px;
  display: block;
  background-color: transparent;
  border: none;
  @media (min-width: 681px) {
    display: none;
  }
`;
const MenuIcon = styled.img`
  width: 100%;
  display: block;
`;
const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  background-color: #f6f6f6;
  border-radius: 8px;
`;
const Button = styled.button`
  background-color: transparent;
  border: none;
  margin-right: 12px;
`;

const SearchIcon = styled.img`
  width: 100%;
  display: block;
`;

const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  width: 100%;
`;

const UserContainer = styled.div`
  @media (max-width: 320px) {
    transform: translate(-0%, -100%) !important;
  }
`;
const UserMenu = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;

  @media (max-width: 680px) {
    justify-content: flex-start;
  }
`;
const UserButton = styled(Link)``;
const UserIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  border-radius: 8px;
  background-color: #f6f6f6;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.2); /* Zooms the wrapper */
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 320px) {
    padding: 8px;
  }
`;

const UserIcon = styled.img``;

export default Header;
