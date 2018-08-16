import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

injectGlobal`
  body {
    margin: 0;
    padding: 40px;
    background-color: black;
    font-family: sans-serif;
  }
`;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
