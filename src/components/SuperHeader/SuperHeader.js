import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import SearchInput from '../SearchInput';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';

const SuperHeader = () => {
  return (
    <Wrapper>
      <MarketingMessage>
        Free shipping on domestic orders over $75!
      </MarketingMessage>
     <HeaderControls>
    
      <SearchInput />
    
      <HelpLink href="/help">Help</HelpLink>
      <UnstyledButton>
        <Icon id="shopping-bag" strokeWidth={1} />
      </UnstyledButton>
      </HeaderControls>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 0.875rem;
  color: ${COLORS.gray[300]};
  background-color: ${COLORS.gray[900]};
  display:flex;
  padding-left:1.5rem;
  align-items: baseline;
`;

const HeaderControls=styled.div`
display:flex;
justify-content: space-around;
flex:1;
padding-top:${12/16}rem ;
 padding-bottom:${6/16}rem ;
 padding-right:1.5rem;

`


const MarketingMessage = styled.span`
  color: ${COLORS.white};
  flex:5;
  padding-top:${12/16}rem ;
 padding-bottom:${12/16}rem ;
 font-size: ${14/16}rem;
 font-weight:500;
`;

const HelpLink = styled.a`
  color: inherit;
  text-decoration: none;
  outline-offset: 2px;
  
  &:not(:focus-visible) {
    outline: none;
  }
`;

export default SuperHeader;
