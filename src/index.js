import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as bizUtil from  'bizcharts/lib/core'

bizUtil.setTheme('dark');

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
