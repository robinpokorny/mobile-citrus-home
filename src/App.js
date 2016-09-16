import React, { Component, cloneElement } from 'react'
import { NavBar, Title } from 'react-ratchet'
import { IndexLink } from 'react-router'

import ref from './firebase'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { store: {} };
  }

  componentDidMount() {
    ref.on('value', (snapshot) =>
      this.setState({ store: snapshot.val() })
    )
  }

  render() {
    const { store } = this.state

    return (
      <div className="App">
        <NavBar>
          <IndexLink
            to="/"
            className="btn-nav btn-link btn pull-left"
            activeStyle={{display: 'none'}}
          >
            <span type="left-nav" className="icon-left-nav icon"></span>
            Home
          </IndexLink>
          <Title>Citrus Home</Title>
        </NavBar>
        <div className="content">

          {this.props.children && cloneElement(this.props.children, { store })}

        </div>
      </div>
    )
  }
}

export default App
