import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { QuizProvider } from './context/providers/QuizProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <QuizProvider>
      <Router>
        <App />
      </Router>
    </QuizProvider>
  </React.StrictMode>
);
