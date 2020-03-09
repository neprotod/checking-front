import React from 'react';
import API from '../services/api';

// eslint-disable-next-line import/no-cycle
import LogOut from '../components/LogOut/LogOut';

const MainPage = () => {
  return (
    <div>
      <LogOut />
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
