import React, { Component } from 'react'
import logo from '../logo.svg'
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';

class Header extends Component {
  getEnter = (e) => {
    const t = {
      opacity: 0,
      scale: 0.8,
      y: '-100%',
    };
    if (e.index >= 2 && e.index <= 6) {
      return { ...t, y: '-30%', duration: 150 };
    }
    return t;
  }
  render() {
    return (
      <header className="app-header">
        <Texty enter={this.getEnter}>CHARTPANEL</Texty>
        <img src={logo} className="app-logo" alt="logo" />
      </header>
    )
  }
}
export default Header;
