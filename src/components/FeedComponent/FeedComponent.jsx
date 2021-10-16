import React from "react";
import { CustomLink, FeedComponentContainer } from "./FeedComponentStyle";

const FeedComponent = ({ title, data, navigateTo }) => {
  return (
    <FeedComponentContainer>
      <h3>{title}</h3>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <CustomLink className='link__container' to={navigateTo}>
              <div className="img__container">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="info">
                <p className="title__Product">{item.title.substr(1, 13)}...</p>
                <span className="price">${item.price}</span>
              </div>
            </CustomLink>
          </li>
        ))}
      </ul>
    </FeedComponentContainer>
  );
};

export default FeedComponent;
