import React from 'react';
import Brand from './brand';
import NavButton from './nav-button';
import '../../styles/css/nav.css';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: null,
    };
    this.setCurrentPage = this.setCurrentPage.bind(this);
  }
  setCurrentPage(page) {
    this.setState({ currentPage: page });
  }
  render() {
    const { currentPage } = this.state;
    return (
      <nav className="nav-bar">
        <Brand />
        <div className="nav-links">
          <NavButton
            destination="/about"
            color="peach"
            text="about"
            setCurrentPage={this.setCurrentPage}
            active={currentPage === 'about'}
          />
          <NavButton
            destination="/portfolio"
            color="ultramarine"
            text="my work"
            setCurrentPage={this.setCurrentPage}
            active={currentPage === 'my work'}
          />
          <NavButton
            destination="/contact"
            color="berry"
            text="contact"
            setCurrentPage={this.setCurrentPage}
            active={currentPage === 'contact'}
          />
        </div>
      </nav>
    );
  }
}

export default NavBar;
