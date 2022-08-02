import BookSeries from './components/BookSeries';
import Footer from './components/Footer';
import Header from './components/Header';
import books from './assets/books.json';
import './scss/app.scss';
import BookBlock from './components/BookBlock';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <BookSeries />

          <h2 className="content__title">Все книги</h2>
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
