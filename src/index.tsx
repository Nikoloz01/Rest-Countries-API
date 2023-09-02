import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import your CSS styles
import App from './app'; // Import your main component

ReactDOM.render(
  <React.StrictMode>
    <div className="page-container">
      <div className="content-container">
        <App />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
