import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/general.css';
import './css/style.css';
// Must be the Last One
import './css/query.css';

import Provider from './GlobalContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);
