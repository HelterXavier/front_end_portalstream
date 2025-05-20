import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/createContext';

const PrivateRoute = ({ children }) => {
  const { authenticated, loading } = useContext(AuthContext);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return authenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
