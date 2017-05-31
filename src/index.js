import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import App from './App';
import NoMatch from './NoMatch';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const Main = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route component={NoMatch} />
    </Switch>
  </Router>
)

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
