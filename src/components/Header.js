import React, { useState } from 'react';
import moment from 'moment';

const Header = ({
  completedTasks,
  incompleteTasks,
  allTasks,
  numberOfActiveTasks,
  completed,
}) => {
  const handleCompleted = (e) => {
    completedTasks();
  };

  const handleIncomeplete = (e) => {
    incompleteTasks();
  };
  return (
    <>
      <div className='header'>
        <div className='header__short'>
          <div className='header__short-date'>
            {moment().format('MMMM Do, YYYY')}
          </div>
          <div className='header__short-tasks'>
            {numberOfActiveTasks} active Tasks
          </div>
        </div>

        <div className='header__details'>
          <div className={`header__details-all ${completed === null && 'dragon'}`} onClick={() => allTasks()}>
            All
          </div>
          <div
            className={`header__details-complete ${completed === false && 'dragon'}`}
            onClick={handleIncomeplete}
          >
            Incomplete Tasks
          </div>
          <div
            className={`header__details-incomplete ${
              completed && 'dragon'
            }`}
            onClick={handleCompleted}
          >
            Complete Tasks
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
