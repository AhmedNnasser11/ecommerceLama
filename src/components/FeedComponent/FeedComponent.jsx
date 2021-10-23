import React from "react";
import { CustomLink, FeedComponentContainer, Info, Price, Title, TitleProduct } from "./FeedComponentStyle";

const FeedComponent = ({ title, data }) => {
  return (
    <FeedComponentContainer>
      <Title>{title}</Title>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <CustomLink className='link__container' to={`/products/${item.id}`}>
              <div className="img__container">
                <img src={item.image} alt={item.title} />
              </div>
              <Info>
                <TitleProduct>{item.title.substr(1, 13)}...</TitleProduct>
                <Price>${item.price}</Price>
              </Info>
            </CustomLink>
          </li>
        ))}
      </ul>
    </FeedComponentContainer>
  );
};

export default FeedComponent;
