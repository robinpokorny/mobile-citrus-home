import React from 'react';

export default ({ store }) => (
  <div className="App">
    <h1>Citrus Home</h1>
    <ul>
      {Object.entries(store.devices).map(([key, value]) =>
        <li key={key}>{value.label}</li>
      )}
    </ul>
  </div>
)
