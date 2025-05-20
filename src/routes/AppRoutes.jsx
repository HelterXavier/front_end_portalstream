import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AuthProvider } from '../context/AuthContext';
import PrivateRoute from './PrivateRoute';
import PrivateLayout from './PrivateLayout';

import LoginView from '../pages/LoginView/LoginView';
import HomeView from '../pages/HomeView/HomeView';
import Lubricants from '../pages/Lubricants/Lubricants';
import Static from '../pages/Static/Static';
import ImplantationTree from '../pages/Implantation/ImplantationTree';
import HomeInfo from '../pages/HomeView/HomeInfo';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginView />} />

          <Route
            element={
              <PrivateRoute>
                <PrivateLayout />
              </PrivateRoute>
            }
          >
            <Route path="/" element={<HomeView />} />
            <Route path="/static" element={<Static />} />
            <Route path="/lubricants" element={<Lubricants />} />
            <Route path="/tree/:id" element={<ImplantationTree />} />
            <Route path="/info/:id" element={<HomeInfo />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default AppRoutes;
