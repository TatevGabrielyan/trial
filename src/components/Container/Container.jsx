import React from 'react';
import * as Styled from './Container.styled';

const Container = ({ children }) => (
  <Styled.StyledContainer>{children}</Styled.StyledContainer>
);

export default Container;