import * as React from 'react';
import PropTypes from 'prop-types';
import { TaskList } from '../tasks/TaskList';

export function Project({id, title, createdAt, updatedAt, tasks}) {
  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">{title}</p>
        {/* <a href="#" className="card-header-icon" aria-label="more options">
          <span className="icon">
            <i className="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </a> */}
      </header>
      <div className="card-content">
        <div className="content">
          {tasks && tasks.length > 0 && (
            <TaskList tasks={tasks} />
          )}
          <br />
          <time dateTime={createdAt}>{new Date(createdAt).toLocaleString()}</time>
        </div>
      </div>
      <footer className="card-footer">
        <a href="#" className="card-footer-item">Edit</a>
        <a href="#" className="card-footer-item">Delete</a>
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
