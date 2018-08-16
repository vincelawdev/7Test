import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

injectGlobal`
  body {
    margin: 0;
    padding: 20px;
    background-color: black;
    font-family: sans-serif;
    
    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {
      padding: 40px;
    }
`;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
