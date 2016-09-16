import React from 'react'
import { NavButton, NavBar, Title } from 'react-ratchet'

export default ({ store }) => (
  <div className="App">
    <NavBar>
      <NavButton href='#'>
        Back
      </NavButton>
      <Title>Citrus Home</Title>
    </NavBar>
    <div className="content">

      <ul>
        {Object.entries(store.devices).map(([key, value]) =>
          <li key={key}>{value.label}</li>
        )}
      </ul>
      
    </div>
  </div>
)
