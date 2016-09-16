import React, { Component } from 'react'
import { NavBar, Title } from 'react-ratchet'
import { Link } from 'react-router'

import ref from './firebase'

class App extends Component {
  componentDidMount() {
    ref.on('value', (snapshot) => {
      // Dirty temp fix
      window.store = snapshot.val()
      this.forceUpdate()
    })
  }

  render() {
    console.log('render')
    return (
      <div className="App">
        <NavBar>
          <Link to="/" className="btn-nav btn-link btn pull-left">
            <span type="left-nav" className="icon-left-nav icon"></span>
            Home
          </Link>
          <Title>Citrus Home</Title>
        </NavBar>
        <div className="content">

          {this.props.children}

        </div>
      </div>
    )
  }
}

export default App
