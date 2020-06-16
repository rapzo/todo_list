import * as React from 'react';
import PropTypes from 'prop-types';
import { Project } from './Project';
import { ProjectForm } from './ProjectForm';

import './Projects.scss';

export function ProjectList({projects, onCreateProject}) {
  return (
    <div className="columns">
      {projects.map(project => (
        <div key={project.id} className="column">
          <Project {...project} />
        </div>
      ))}
      <div className="column">
        <ProjectForm onCreateProject={onCreateProject} />
      </div>
    </div>
  );
}

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape(Project.propTypes)
  ).isRequired,
  onCreateProject: PropTypes.func.isRequired,
};
