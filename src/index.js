import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import App from './App';
import NoMatch from './NoMatch';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
  combineReducers({
    router: routerReducer
  }),
  applyMiddleware(middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


const Main = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router>
        <Switch>
          <Route exact path="/" component={App}/>
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
