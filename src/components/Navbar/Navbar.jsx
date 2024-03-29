import React, { useState, useEffect } from "react";
import Nav1 from "./Nav1/Nav1";
import { Drawer, Input, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Container from "../Container/Container";
import logo from '../../assets/Images/Logotype.svg';
import searchIcon from '../../assets/Images/Icon/Search/Icon/Search/B.svg';
import closeButton from '../../assets/Images/Icon/Combined Shape.png';
import * as Styled from './Navbar.styled';

const { Search } = Input;

const Nav = ({ setSearchQuery }) => {
  const [visible, setVisible] = useState(false),
    [key, setKey] = useState("1"),
    [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSearch = (value) => {
    setSearchQuery(value);
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <nav>
      <Container>
        <Styled.HeaderContainer >
        {isMobile && (
        <Styled.CollapseButton onClick={() => setVisible(true)} xs={3} sm={3} md={3}>
          <MenuOutlined />
        </Styled.CollapseButton>
      )}
          <Styled.LogoContainer xs={9} sm={9} md={20}>
            <img src={logo} alt="logo" />
          </Styled.LogoContainer >
             <Styled.SearchContainer xs={6} sm={6} md={3}>
                <Search
                  onSearch={handleSearch}
                  enterButton
                  suffix={<img src={searchIcon} alt="search icon" />}
                  onChange={handleInputChange}
                />
            </Styled.SearchContainer>
        </Styled.HeaderContainer>
      </Container>
      {!isMobile && <Nav1 key={key} setKey={setKey} />}
      <Drawer
       title={
        <Styled.CollapsedNav>
          <img src={logo} alt="Logo"  />
          <Styled.CloseButton onClick={() => setVisible(false)}>
            <Styled.CloseImage src={closeButton} alt="close button"/>
          </Styled.CloseButton>
        </Styled.CollapsedNav>
      }
        placement="left"
        closable={false}
        onClose={() => setVisible(false)}
        open={visible}
        width= {320}
      >
        <Nav1 key={key} setKey={setKey} />
      </Drawer>
    </nav>
  );
};

export default Nav;
