import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

export function Task({
  id,
  description,
  finishedAt,
  onCompleteTask,
  onRemoveTask
}) {
  const handleChangeTicker = () => {
    onCompleteTask(id);
  };
  const handleClickTrash = () => {
    onRemoveTask(id);
  };

  return (
    <div className="task">
      <div className="task__check">
        <input
          className="checkbox"
          type="checkbox"
          onChange={handleChangeTicker}
          checked={Boolean(finishedAt)}
          disabled={Boolean(finishedAt)}
        />
      </div>
      {!finishedAt ? (
        <>
          <div className="task__description">
            {description}
          </div>
          <div className="task__control">
            <span className="icon">
              <FontAwesomeIcon icon="trash-alt" onClick={handleClickTrash} />
            </span>
          </div>
        </>
      ) : (
        <div title={new Date(finishedAt).toLocaleString()} className="task__description">
          {description}
        </div>
      )}
    </div>
  );
}

Task.propTypes = {
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
  finishedAt: PropTypes.string,
  onCompleteTask: PropTypes.func,
  onRemoveTask: PropTypes.func,
};

Task.defaultProps = {
  onCompleteTask: () => {},
  onRemoveTask: () => {},
}
