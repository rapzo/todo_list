import * as React from 'react';
import PropTypes from 'prop-types';
import { TaskList } from '../tasks/TaskList';

export function Project({id, title, createdAt, updatedAt, tasks}) {
  const [state, setState] = React.useState({
    id,
    title,
    tasks,
  });
  const inputRef = React.useRef();

  const handleCreateTask = () => {
    const now = new Date().toISOString();
    const {tasks} = state;

    setState({
      ...state,
      tasks: [
        ...tasks,
        {
          id: tasks.length + 1,
          description: inputRef.current.value,
          createdAt: now,
          updatedAt: now,
          finishedAt: null,
        }
      ]
    });

    inputRef.current.value = '';
  };

  const handleCompleteTask = id => {
    const now = new Date().toISOString();
    const task = state.tasks.find(task => task.id === id);
    const tasks = state.tasks.filter(task => task.id !== id);

    if (!task) return;

    setState({
      ...state,
      tasks: [
        ...tasks,
        {
          ...task,
          finishedAt: now,
        },
      ],
    });
  };

  const handleRemoveTask = id => {
    const tasks = state.tasks.filter(task => task.id !== id);

    setState({
      ...state,
      tasks,
    });
  };

  return (
    <div className="card">
      <header className="card-header">
        <h3 className="card-header-title">{title}</h3>
      </header>
      <div className="card-content">
        <div className="content">
          <TaskList
            tasks={state.tasks}
            onCompleteTask={handleCompleteTask}
            onRemoveTask={handleRemoveTask}
          />
        </div>
      </div>
      <footer className="card-footer">
        <div className="card-footer-item">
          <input type="text" ref={inputRef} className="card-footer-item" />
        </div>
        <div className="card-footer-item">
          <button
            className="button is-primary"
            onClick={handleCreateTask}
          >
            add
          </button>
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
