import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import GlobalStyle from "./Styles/Globalstyles.styles"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <GlobalStyle />
        <App />
    </div>
);