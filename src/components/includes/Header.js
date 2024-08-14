import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <HeaderContainer>
        <HeaderWrapper>
          <LogoContainer>
            <LogoLink to="/">
              <h1>
                <Image
                  src={require("../../components/assets/Logo.svg").default}
                  alt="Logo image"
                />
              </h1>
            </LogoLink>
          </LogoContainer>
          <Navbar>
            <Menu>
              <MenuItem>
                <MenuLink to="#">Shop</MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink to="#">Men</MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink to="/product/:productId">Women</MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink to="#">Combos</MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink to="#">Joggers</MenuLink>
              </MenuItem>
            </Menu>
          </Navbar>
          <SearchBar>
            <Button>
              <SearchIcon
                src={require("../../components/assets/search.svg").default}
              />
            </Button>
            <Input placeholder="Search" />
          </SearchBar>
          <UserMenu>
            <UserButton>
              <UserIconContainer>
                <UserIcon
                  src={require("../../components/assets/wishlist.svg").default}
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
        </HeaderWrapper>
      </HeaderContainer>
    </>
  );
}
const HeaderContainer = styled.header`
  display: flex;
  height: 108px;
  border-bottom: 1px solid #bebcbd;
`;

const HeaderWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.div``;

const LogoLink = styled(Link)`
  text-decoration: none;
`;

const Image = styled.img`
  width: 100%;
  display: block;
`;

const Navbar = styled.nav``;
const Menu = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 40px;
`;
const MenuItem = styled.li``;
const MenuLink = styled(Link)`
  text-decoration: none;
  color: #807d7e;
  &:hover,
  &:focus,
  &:active {
    color: #3c4242;
  }
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
const UserMenu = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;
`;
const UserButton = styled(Link)``;
const UserIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  paddings: 12px;
  border-radius: 8px;
  background-color: #f6f6f6;
`;

const UserIcon = styled.img``;

export default Header;
