import React from 'react';
import Brand from './brand';
import NavButton from './nav-button';

const NavBar = props => (
  <nav>
    <Brand />
    <NavButton
      destination="/about"
      color="peach"
      text="about"
    />
    <NavButton
      destination="/portfolio"
      color="ultramarine"
      text="my work"
    />
    <NavButton
      destination="/contact"
      color="berry"
      text="contact"
    />
  </nav>
);

export default NavBar;
