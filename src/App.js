import BookSeries from './components/BookSeries';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import books from './assets/books.json';
import './scss/app.scss';
import BookBlock from './components/BookBlock';
import Sort from './components/Sort/Sort';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
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
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
