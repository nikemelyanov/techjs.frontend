import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './utils/router/PrivateRoute';

import LoginPage from './components/auth/login';
import Home from './components/home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
