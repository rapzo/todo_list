import * as React from 'react';
import PropTypes from 'prop-types';
import { Task } from './Task';

import './Tasks.scss';

export function TaskList({tasks, onCompleteTask, onRemoveTask}) {
  const todoTasks = tasks.filter(
    ({finishedAt}) => Boolean(finishedAt) === false
  );
  const doneTasks = tasks.filter(
    ({finishedAt}) => Boolean(finishedAt) === true
  );

  return (
    <>
      <div className="content">
        <h5 className="title is-5">To Do</h5>
        {todoTasks.length > 0 ? todoTasks.map(task => (
          <div key={task.id} className="">
            <Task
              {...task}
              onCompleteTask={onCompleteTask}
              onRemoveTask={onRemoveTask}
            />
          </div>
        )) : (
          <p>No tasks yet...</p>
        )}
      </div>
      <div className="content">
        <h5 className="title is-5">Done</h5>
        {doneTasks.length > 0 && doneTasks.map(task => (
          <div key={task.id} className="">
            <Task
              {...task}
            />
          </div>
        ))}
      </div>
    </>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape(Task.propTypes),
  ).isRequired,
  onCompleteTask: PropTypes.func.isRequired,
  onRemoveTask: PropTypes.func.isRequired,
};
