import React, { useState } from 'react';

const BookBlock = ({ id, title, price, imgUrl, author, coverType, language }) => {
  const [activeCover, setActiveCover] = useState(0);
  const [activeLanguage, setActiveLanguage] = useState(0);

  const coverTypes = ['мягкая', 'твердая'];

  return (
    <div className="book-block">
      <img className="book-block__image" src={imgUrl} alt="Book" />
      <h3 className="book-block__title">{title}</h3>
      <span>{author}</span>
      <div className="book-block__selector">
        <ul>
          {coverType.map((type) => (
            <li
              onClick={() => setActiveCover(type)}
              className={activeCover === type ? 'active' : ''}>
              {coverTypes[type]}
            </li>
          ))}
        </ul>
        <ul>
          {language.map((lang, i) => (
            <li
              onClick={() => setActiveLanguage(i)}
              className={activeLanguage === i ? 'active' : ''}>
              {lang}
            </li>
          ))}
        </ul>
      </div>
      <div className="book-block__bottom">
        <div className="book-block__price">от {price} Br</div>
        <button className="button button--outline button--add">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          <i>2</i>
        </button>
      </div>
    </div>
  );
};

export default BookBlock;
