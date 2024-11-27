import React, { useState } from 'react';
import { ConfigProvider, theme, Button } from 'antd';
import HomePage from './pages/HomePage';
import RepositoryPage from './pages/RepositoryPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <div style={{ position: 'fixed', top: 10, right: 10, zIndex: 1000 }}>
          <Button onClick={toggleTheme}>
            Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
          </Button>
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/repository/:owner/:repo" element={<RepositoryPage />} />
        </Routes>
      </Router>
    </ConfigProvider>
  );
};

export default App;
