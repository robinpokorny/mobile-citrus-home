import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, hashHistory, Router, Route } from 'react-router'
import entries from 'object.entries'
entries.shim()

import 'ratchet-npm/dist/css/ratchet.css'
//import 'ratchet-npm/dist/css/ratchet-theme-ios.css'

import App from './App'
import DevicesList from './DevicesList'
import Device from './Device'
import './index.css'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={DevicesList} />
      <Route path="device/:id" component={Device} />
    </Route>
  </Router>,
  //<App store={snapshot.val() || {}} actions={actions}/>,
  document.getElementById('root')
)
