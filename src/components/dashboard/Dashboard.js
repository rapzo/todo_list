import * as React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { ProjectList } from '../projects/ProjectList';

export function Dashboard({user}) {
  const { location } = window;
  const [projects, setProjects] = React.useState([]);

  React.useEffect(() => {
    if (!user.loggedIn) return () => {};

    fetch('/data/projects.json')
      .then(response => {
        return response.json();
      })
      .then((body) => (
        setProjects(body)
      ))
      .catch(error => {
        console.log(error);
      });

    return () => {};
  }, [user.loggedIn]);

  if (!user.loggedIn) {
    return (
      <Redirect
        to={{
          pathname: "/login",
          state: {
            from: location.pathname
          }
        }}
      />
    );
  }

  return (
    <ProjectList projects={projects} />
  );
}

Dashboard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    loggedIn: PropTypes.bool.isRequired,
  }),
};
