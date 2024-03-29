
import styled from 'styled-components';
import { Row, Col, Button } from "antd";

export const HeaderContainer = styled(Row)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoContainer = styled(Col)`
  flex: 1; 
  text-align: center; 
  margin: 1.8125rem 0;

  @media screen and (max-width: 570px) {
    img {
      width: 163px;
    }
  }
`;

export const CollapseButton = styled(Col)`
 
`

export const SearchContainer = styled(Col)`
  display: flex;
  align-items: center;

  .ant-input-group-addon {
    display: none;
  }
  .ant-input-affix-wrapper {
    border: none;
    border-bottom: 1px solid;
    border-radius: 0 !important;
  }

`;

export const CollapsedNav = styled('div')`
  display: flex;
  justify-content: space-between;

  .ant-button {
    marginLeft: auto;
    border: none; 

    img {
      width: 1.148rem;
    }
  }
`

export const CloseButton = styled(Button)`
    margin-left: auto;
    border: none; 
  }
`
export const CloseImage = styled('img')`
    width: 1.148rem;
  }
`