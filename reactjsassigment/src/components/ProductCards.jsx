import React from 'react';
import styled from 'styled-components';

const ProductCards = ({ product }) => {
  
  if (!product) {
    return <div>Product data is missing</div>;
  }

  const { image, category,title, rating, price,description } = product;

  return (
    <Card>
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <h3>{rating.rate}</h3>
      <But>{category}</But>
      <Description>{description}</Description>
      <h5>${price}</h5>
      <Button>Buy Now</Button>
      <Button1>Add to cart</Button1>
    </Card>
  );
};

export default ProductCards;

const Card = styled.div`
//   border:1px solid;

  border-radius:5px;
  padding:15px;
  text-align:center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  img {
  width:90%;
  height:200px;
  object-fit:cover;
  } 
`;

const Button = styled.button`
  margin-top:10px;
  padding:5px 10px;
  background:#FF5733;
  border-radius:3px;
  color:white;
  border:none;
  cursor:pointer;

`;

const Button1 = styled.button`
  margin-top:10px;
  padding:5px 10px;
  background:white;
  color:#FF5733;
  gap:5px;
  border:none;
  cursor:pointer;

`;


const Description=styled.p`
display: -webkit-box;
-webkit-line-clamp:2;
-webkit-box-orient:vertical;
overflow:hidden;
text-overflow:none;
`

const But=styled.button`;
border:none;
`