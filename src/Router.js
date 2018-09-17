import React, { Component } from 'react';
import TableWrapper from './component/tableWrapper';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import reducerSwitch from './reducers'
import { createStore,  applyMiddleware } from 'redux';
import {Provider} from 'react-redux';

import "foundation-sites/dist/css/foundation.css";

const store = createStore(reducerSwitch);

class RouterIndex extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
          <hr />
          <Provider store={store}>
            <Route excat path="/" component={TableWrapper} />
          </Provider>
        </div>
      </Router>
    );
  }
}

export default RouterIndex;
