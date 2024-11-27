import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RepositoryPage from './pages/RepositoryPage';

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/repository/:owner/:repo" element={<RepositoryPage />} />
    </Routes>
  </Router>
);

export default App;
