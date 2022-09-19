import React from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';

export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const params = useParams();

    return <Component router={{ location, navigate, params }} {...props} />;
  };

  return Wrapper;
};
