import React from 'react';
import API from '../services/api';

const MainPage = () => {
  return (
    <div>
      <p>
        Передаю эстафету))) Рома, этого файл и всё что касается MainPage
        удалишь!!!))))))
      </p>
      <button
        type="button"
        onClick={() => API.getAllPriority().then(console.log)}
      >
        CLICK
      </button>
    </div>
  );
};

export default MainPage;
