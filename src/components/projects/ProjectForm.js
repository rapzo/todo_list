import * as React from 'react';
import PropTypes from 'prop-types';

export function ProjectForm({onCreateProject}) {
  const inputRef = React.useRef();
  const handleCreateProject = () => {
    onCreateProject(inputRef.current.value);
    inputRef.current.value = '';
  };


  return (
    <div className="project-form box is-light">
      <h4 className="title is-4">Create a new project</h4>
      <div className="field">
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Project Name"
            ref={inputRef}
          />
        </div>
      </div>
      <button className="button is-primary" onClick={handleCreateProject}>
        Create Project
      </button>
    </div>
  );
}

ProjectForm.propTypes = {
  onCreateProject: PropTypes.func.isRequired,
};
