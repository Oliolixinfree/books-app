import React from 'react';
import BookBlock from '../components/BookBlock';
import BookSeries from '../components/BookSeries';
import Sort from '../components/Sort/Sort';
import Skeleton from '../components/BookBlock/Sketeton';

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://62eac9bd705264f263cf1189.mockapi.io/books')
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <div className="sort__items">
        <h2 className="content__title">Все книги</h2>
        <Sort />
      </div>
      <BookSeries />
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <BookBlock key={obj.id} {...obj} />)}
      </div>
    </>
  );
};

export default Home;
