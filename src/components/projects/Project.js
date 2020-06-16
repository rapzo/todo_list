import * as React from 'react';
import PropTypes from 'prop-types';
import { TaskList } from '../tasks/TaskList';

export function Project({id, title, createdAt, updatedAt, tasks}) {
  return (
    <div className="card">
      <header className="card-header">
        <h3 className="card-header-title">{title}</h3>
        {/* <a href="#" className="card-header-icon" aria-label="more options">
          <span className="icon">
            <i className="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </a> */}
      </header>
      <div className="card-content">
        <div className="content">
          <h5 className="title is-5">To Do</h5>
          {tasks && tasks.length > 0 ? (
            <TaskList tasks={tasks} />
          ) : (
            <p>No tasks...</p>
          )}
        </div>
      </div>
      <footer className="card-footer">
        <div className="card-footer-item">
          <input type="text" className="card-footer-item" />
        </div>
        <div className="card-footer-item">
          <button className="button is-primary" onClick={() => {}}>add</button>
        </div>
      </footer>
    </div>
  );
}

Project.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired,
    finishedAt: PropTypes.string,
  })),
};
