import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/createContext';

const PublicRoute = ({ children }) => {
  const { authenticated, loading } = useContext(AuthContext);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return authenticated ? <Navigate to="/" /> : children;
};

export default PublicRoute;
