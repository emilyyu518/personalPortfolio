import React from 'react';
import PropTypes from 'prop-types';
import Brand from './brand';
import NavButton from './nav-button';

const navStyle = {
  open: {
    // display: 'inherit',
    position: 'absolute',
    right: 'calc(20vw - 2.5rem)',
    top: '20vh',
    transition: 'right .5s',
  },
  closed: {
    // display: 'none',
    // position: 'absolute',
    // right: '-200vw',
    // top: '20%',
    // transition: 'right .5s',
  },
};

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: null,
      navOpen: false,
    };
    this.setCurrentPage = this.setCurrentPage.bind(this);
    this.toggleNav = this.toggleNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }
  setCurrentPage(page) {
    this.setState({ currentPage: page });
  }
  toggleNav() {
    this.setState({ navOpen: !this.state.navOpen });
  }
  closeNav() {
    this.setState({ navOpen: false });
  }
  render() {
    const { generateRandomIndex } = this.props;
    const { currentPage, navOpen } = this.state;
    return (
      <nav className="nav-bar">
        <Brand generateRandomIndex={generateRandomIndex} setCurrentPage={this.setCurrentPage} />
        <div className="hamburger-container">
          <div className="hamburger-box">
            <input
              type="checkbox"
              className="hamburger"
              id="hamburger"
              checked={navOpen}
              onChange={this.toggleNav}
            />
            <label htmlFor="hamburger" className="hamburger-spin">
              <div className="bun diagonal bun-top" />
              <div className="bun horizontal" />
              <div className="bun diagonal bun-bottom" />
            </label>
          </div>
        </div>
        <div className="nav-links" style={navOpen ? navStyle.open : navStyle.closed}>
          <NavButton
            destination="/about"
            color="peach"
            text="about"
            setCurrentPage={this.setCurrentPage}
            active={currentPage === 'about'}
            closeNav={this.closeNav}
          />
          <NavButton
            destination="/portfolio"
            color="ultramarine"
            text="my work"
            setCurrentPage={this.setCurrentPage}
            active={currentPage === 'my work'}
            closeNav={this.closeNav}
          />
          <NavButton
            destination="/contact"
            color="berry"
            text="contact"
            setCurrentPage={this.setCurrentPage}
            active={currentPage === 'contact'}
            closeNav={this.closeNav}
          />
        </div>
      </nav>
    );
  }
}

NavBar.propTypes = {
  generateRandomIndex: PropTypes.func,
};

NavBar.defaultProps = {
  generateRandomIndex: null,
};

export default NavBar;
