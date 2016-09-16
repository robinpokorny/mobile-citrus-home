import React from 'react';
import ReactDOM from 'react-dom';
import entries from 'object.entries'
entries.shim()

import ref from './firebase'
import * as actions from './actions'
import App from './App';
import './index.css';

ref.on('value', (snapshot) =>
  ReactDOM.render(
    <App store={snapshot.val() || {}} actions={actions}/>,
    document.getElementById('root')
  )
)
