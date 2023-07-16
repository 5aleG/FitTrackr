import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import GlobalStyle from "./Styles/Globalstyles.styles"
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <BrowserRouter>
            <GlobalStyle />
            <App />
        </BrowserRouter>
    </div>
);