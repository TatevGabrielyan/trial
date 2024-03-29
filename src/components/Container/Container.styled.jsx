import styled from 'styled-components';
import { media } from '../../theme/media';

export const StyledContainer = styled('div')`

  > div {
    margin: 0 auto; 
    ${media.greaterThan('xs')`max-width: 335px;`};
    ${media.greaterThan('sm')`max-width: 540px;`};
    ${media.greaterThan('md')`max-width: 720px;`};
    ${media.greaterThan('lg')`max-width: 960px;`};
    ${media.greaterThan('xl')`max-width: 1160px;`};
  }
`;