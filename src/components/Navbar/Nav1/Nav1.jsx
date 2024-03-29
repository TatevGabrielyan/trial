import React, { useState, useEffect, useRef } from 'react';
import { Dropdown, Menu } from 'antd';
import Container from '../../Container/Container';
import chevronIcon from '../../../assets/Images/Menu-Item/Menu-Item/Icon/Chevron/chevron-down.svg';
import { menuItems } from '../../../constants/navItems';
import * as Styled from './Nav1.styled';

const Nav1 = () => {
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        setIsSticky(window.scrollY > navRef.current.offsetTop + 200);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
   <Styled.ContainerElement ref={navRef} className={isSticky ? 'sticky' : ''}>
     <Container>
      <Styled.MenuContainer >
      <Dropdown
          overlayClassName="custom-dropdown-menu"
          dropdownRender={(menu) => (
              <Styled.DropdownMenu>
                  {menuItems.demos.map(item => <Menu.Item key={item.key}>{item.label}</Menu.Item>)}
              </Styled.DropdownMenu>
          )}
      >
          <a href="/" onClick={(e) => e.preventDefault()}>
              <Styled.DropdownSpace>
                  Demos
                  <img src={chevronIcon} alt="chevron icon" />
              </Styled.DropdownSpace>
          </a>
      </Dropdown>
        <Styled.MobileDivider />
        <>
        <Styled.GlobalStyle />
        <Dropdown
          overlayClassName="custom-dropdown-menu"
          dropdownRender={(menu) => (
              <Styled.DropdownMenu>
                  {menuItems.post.map(item => (
                      <Menu.SubMenu key={item.key} title={item.label}>
                          {item.subMenu.map(subItem => (
                              <Menu.Item key={subItem.key}>{subItem.label}</Menu.Item>
                          ))}
                      </Menu.SubMenu>
                  ))}
              </Styled.DropdownMenu>
          )}
      >
          <a href="/" onClick={(e) => e.preventDefault()}>
              <Styled.DropdownSpace>
                  Post
                  <img src={chevronIcon} alt="chevron icon" />
              </Styled.DropdownSpace>
          </a>
      </Dropdown>

          <Styled.MobileDivider />
        </>
        <Dropdown
          overlayClassName="custom-dropdown-menu"
          dropdownRender={(menu) => (
              <Styled.DropdownMenu>
                  {menuItems.features.map(item => (
                      <Menu.SubMenu key={item.key} title={item.label}>
                          {item.subMenu.map(subItem => (
                              <Menu.Item key={subItem.key}>{subItem.label}</Menu.Item>
                          ))}
                      </Menu.SubMenu>
                  ))}
              </Styled.DropdownMenu>
          )}
      >
          <a href="/" onClick={(e) => e.preventDefault()}>
              <Styled.DropdownSpace>
                  Features
                  <img src={chevronIcon} alt="chevron icon" />
              </Styled.DropdownSpace>
          </a>
      </Dropdown>

        <Styled.MobileDivider />
        <Dropdown
            overlayClassName="custom-dropdown-menu"
            dropdownRender={(menu) => (
                <Styled.DropdownMenu>
                    {menuItems.categories.map(item => (
                        <Menu.Item key={item.key}>{item.label}</Menu.Item>
                    ))}
                </Styled.DropdownMenu>
            )}
        >
            <a href="/" onClick={(e) => e.preventDefault()}>
                <Styled.DropdownSpace>
                    Categories
                    <img src={chevronIcon} alt="chevron icon" />
                </Styled.DropdownSpace>
            </a>
        </Dropdown>
        <Styled.MobileDivider />
        <Dropdown
          overlayClassName="custom-dropdown-menu"
          dropdownRender={(menu) => (
              <Styled.DropdownMenu>
                  {menuItems.shop.map(item => (
                      <Menu.Item key={item.key}>{item.label}</Menu.Item>
                  ))}
              </Styled.DropdownMenu>
          )}
      >
          <a href="/" onClick={(e) => e.preventDefault()}>
              <Styled.DropdownSpace>
                  Shop
                  <img src={chevronIcon} alt="chevron icon" />
              </Styled.DropdownSpace>
          </a>
      </Dropdown>

        <Styled.MobileDivider />
        <Styled.DropdownSpace>
               Buy now
        </Styled.DropdownSpace>
      </Styled.MenuContainer>
    </Container>
   </Styled.ContainerElement>
  );
};

export default Nav1;