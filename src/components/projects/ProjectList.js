import * as React from 'react';
import PropTypes from 'prop-types';
import { Project } from './Project';

export function ProjectList({projects}) {
  return (
    <div className="columns">
      {projects.map(project => (
        <div key={project.id} className="column is-2">
          <Project {...project} />
        </div>
      ))}
    </div>
  );
}

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape(Project.propTypes)
  ).isRequired,
};
