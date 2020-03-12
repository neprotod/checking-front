import React from 'react';
import CreateTask from '../components/CreateTask';

// eslint-disable-next-line import/no-cycle
import LogOut from '../components/LogOut/LogOut';

const MainPage = () => {
  return (
    <div>
      <CreateTask />
      <LogOut />
    </div>
  );
};

export default MainPage;
