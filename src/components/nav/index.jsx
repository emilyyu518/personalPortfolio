import React from 'react';
import PropTypes from 'prop-types';
import Brand from './brand';
import NavButton from './nav-button';
import Footer from './footer';

const navStyle = {
  open: {
    border: '2vh solid black',
    boxSizing: 'border-box',
    height: '100vh',
  },
  closed: {
  },
  notInvisible: {
    height: '73vh',
    width: '100vw',
    paddingTop: '15vh',
    position: 'inherit',
  },
  invisible: {
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
      <nav className="nav-bar" style={navOpen ? navStyle.open : navStyle.closed}>
        <Brand generateRandomIndex={generateRandomIndex} setCurrentPage={this.setCurrentPage} closeNav={this.closeNav} />
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
        <div className="invisible-links-wrapper" style={navOpen ? navStyle.notInvisible : navStyle.invisible}>
          <div className="nav-links">
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
          <div className="mobile-nav-footer">
            <Footer />
          </div>
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
