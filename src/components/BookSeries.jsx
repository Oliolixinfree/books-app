import React, { useState } from 'react';

const BookSeries = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const series = [
    'Все',
    'Классика',
    'Новая классика',
    'Фантастика',
    'Триллеры',
    'Чак Паланик и его бойцовский клуб',
    'Ужасы',
  ];

  return (
    <div>
      <ul>
        {series.map((value, i) => (
          <li onClick={() => setActiveIndex(i)} className={activeIndex === i ? 'active' : ''}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookSeries;
