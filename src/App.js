import React from 'react'
import { NavBar, Title } from 'react-ratchet'
import { Link } from 'react-router'

export default ({ children }) => (
  <div className="App">
    <NavBar>
      <Link to="/" className="btn-nav btn-link btn pull-left">
        <span type="left-nav" className="icon-left-nav icon"></span>
        Home
      </Link>
      <Title>Citrus Home</Title>
    </NavBar>
    <div className="content">

      {children}

    </div>
  </div>
)
