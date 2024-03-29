import styled,  { createGlobalStyle, keyframes } from 'styled-components';
import { Space, Menu, Divider } from 'antd';

export const MenuContainer = styled.div`
    text-align: center;
    padding: 18px 0;

`

const slideInTop = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

export const ContainerElement = styled.div`
  border: 1px solid #E9E9E9;
  border-right: none;
  border-left: none;

  &.sticky {
    background: #ffffff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: auto; 
    z-index: 1000;
    transition: top 0.5s ease;
    animation: ${slideInTop} 0.5s ease;
  }
`;

export const DropdownSpace = styled(Space)`
        font-style: normal;
        font-weight: 500;
        font-size: 1rem;
        line-height: 16px;
        color: #000000;
        padding-right: 32px;
        cursor: pointer;
`;

export const DropdownMenu = styled(Menu)`
    margin-top: 15px !important;
    border-radius: 0 !important;
    box-shadow: none !important;
    border: 1px solid #E9E9E9;
    padding: 20px !important;
    width: 176px;
    background: #FFFFFF;


    li {
        font-style: normal;
        font-weight: 400;
        font-size: 0.813rem;
        line-height: 13px;
        text-transform: capitalize;
        color: #000000; 
        &:not(:last-child) {
            border-bottom: 1px solid #E9E9E9;
        }

        &:hover {   
            color: #969696 !important;     
            background-color: #ffffff !important;
            margin-left: 5px;
        }

        div {
            .anticon svg {
                color: #000000; 
            }

            &:hover {   
                color: #969696 !important;     
                background-color: #ffffff !important;

                .anticon svg {
                    color: #000000; 
                }
            }

        }
    }
`


export const DropdownMenuItem = styled(Menu.Item)`
    font-style: normal;
    font-weight: 400 !important;
    font-size: 0.813rem !important;
    line-height: 13px !important;
    color: #000000 !important; 
    text-transform: uppercase;
    width: 176px;
    &:not(:last-child) {
        border-bottom: 1px solid #E9E9E9;
    }

    &:hover {   
        color: #969696 !important;     
        background-color: #ffffff !important;
    }
`;

export const GlobalStyle = createGlobalStyle`
  .ant-dropdown-menu-submenu ul{
    border-radius: 0 !important;
    box-shadow: none!important;
    margin-left: 20px;
    border: 1px solid #E9E9E9;
    padding: 20px !important;
    width: 176px;
  }
  .ant-dropdown-menu-submenu ul li {
        font-style: normal;
        font-weight: 400;
        font-size: 0.813rem;
        line-height: 13px;
        color: #000000; 
        &:not(:last-child) {
            border-bottom: 1px solid #E9E9E9;
        }

        &:hover {   
            color: #969696 !important;     
            background-color: #ffffff !important;
        }

        div {
            .anticon svg {
                color: #000000; 
            }

            &:hover {   
                color: #969696 !important;     
                background-color: #ffffff !important;

                .anticon svg {
                    color: #000000; 
                }
            }

        }
  }
`;

export const MobileDivider = styled(Divider)`
  && {
    background-color: #E9E9E9; 
  }

  @media (min-width: 576px) {
    display: none; 
  }
`;