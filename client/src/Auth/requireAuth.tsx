import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom'; // assuming you're using React Router for routing

const requireAuth = (Component) => {
  const AuthenticatedComponent = (props) => {
    const token = localStorage.getItem('token');
    const [isLoggedIn, setIsLoggedIn] = useState(token ? true : false);
    if (isLoggedIn) {
      return <Component {...props} />;
    } else {
      return <Navigate to="/" />;
    }
  };

  return AuthenticatedComponent;
};

export default requireAuth;
