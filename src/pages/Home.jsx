import React from 'react';
import BookBlock from '../components/BookBlock';
import BookSeries from '../components/BookSeries';
import Sort from '../components/Sort/Sort';
import books from '../assets/books.json';

const Home = () => {
  return (
    <>
      <div className="sort__items">
        <h2 className="content__title">Все книги</h2>
        <Sort />
      </div>
      <BookSeries />
      <div className="content__items">
        {books.map((obj) => (
          <BookBlock {...obj} />
        ))}
      </div>
    </>
  );
};

export default Home;
