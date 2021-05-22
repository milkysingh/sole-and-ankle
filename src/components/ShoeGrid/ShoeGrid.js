import React from 'react';
import styled from 'styled-components/macro';

import SHOES from '../../data';
import ShoeCard from '../ShoeCard';

const ShoeGrid = () => {
  return (
    <Wrapper>
      {SHOES.map((shoe) => (
      <Shoewrapper key={shoe.slug}>
        <ShoeCard  {...shoe} />
      </Shoewrapper>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
display: flex;
flex-wrap:wrap;
gap:16px;
`;
const Shoewrapper=styled.div`
flex:1;
min-width: 270px;
`

export default ShoeGrid;
