import * as React from 'react';
import PropTypes from 'prop-types';
import { Task } from './Task';

export function TaskList({tasks}) {
  return (
    <div className="">
      {tasks.map(task => (
        <div key={task.id} className="">
          <Task {...task} />
        </div>
      ))}
    </div>
  )
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape(Task.propTypes),
  ).isRequired,
};
