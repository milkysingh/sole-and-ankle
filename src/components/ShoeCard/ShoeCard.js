import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';
import { formatPrice, pluralize, isNewShoe } from '../../utils';
import Spacer from '../Spacer';

const ShoeCard = ({
  slug,
  name,
  imageSrc,
  price,
  salePrice,
  releaseDate,
  numOfColors,
}) => {
  // There are 3 variants possible, based on the props:
  //   - new-release
  //   - on-sale
  //   - default
  //
  // Any shoe released in the last month will be considered
  // `new-release`. Any shoe with a `salePrice` will be
  // on-sale. In theory, it is possible for a shoe to be
  // both on-sale and new-release, but in this case, `on-sale`
  // will triumph and be the variant used.
  // prettier-ignore
  const variant = typeof salePrice === 'number'
    ? 'on-sale'
    : isNewShoe(releaseDate)
      ? 'new-release'
      : 'default'

  return (
    <Link href={`/shoe/${slug}`}>
      <Wrapper>
        <ImageWrapper>
          {variant!=='default'&&(<FeatureTag onSale={salePrice}>
           {variant}
            </FeatureTag>)}
          <Image alt="" src={imageSrc} />
        </ImageWrapper>
        <Spacer size={12} />
        <Row>
          <Name>{name}</Name>
          <Price onSale={salePrice}>{formatPrice( price)}</Price>
         
          
        </Row>
        <Row>
          <ColorInfo>{pluralize('Color', numOfColors)}</ColorInfo>
          {salePrice&&<SalePrice>{formatPrice(salePrice)}</SalePrice>}
        </Row>
      </Wrapper>
    </Link>
  );
};

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  flex:1 1 350px;
  padding:20px;
`;

const Wrapper = styled.article`


margin-left: ${36/16}rem;
`;

const ImageWrapper = styled.div`
  position: relative;
 
`;

const Image = styled.img`
width: 100%;

`;
const FeatureTag = styled.div`
padding: 7px 9px 9px 10px;
background-color   :${props=>props.onSale?COLORS.primary: COLORS.secondary} ;
color: ${COLORS.white};
font-weight:${WEIGHTS.bold};
font-size:${14/16}rem;
text-transform:capitalize;
height: 32px;
position: absolute;
top:12px;
right:-4px;
border-radius: 2px;
`;

const Row = styled.div`
  font-size: 1rem;
  display:flex;
  justify-content: space-between;
`;

const Name = styled.h3`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.gray[900]};
`;

const Price = styled.span`
text-decoration:${props=>props.onSale&&'line-through'}
`;

const ColorInfo = styled.p`
  color: ${COLORS.gray[700]};
`;

const SalePrice = styled.span`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.primary};
`;

export default ShoeCard;
