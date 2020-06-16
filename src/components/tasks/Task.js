import * as React from 'react';
import PropTypes from 'prop-types';

export function Task({id, description, createdAt, updatedAt, finishedAt}) {
  return (
    <div>
      {description}
    </div>
  );
}

Task.propTypes = {
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
  finishedAt: PropTypes.string,
};
