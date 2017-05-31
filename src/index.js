import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const Main = () => (
  <Router>
    <Route exact path="/" component={App}/>
  </Router>
)

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
