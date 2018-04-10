import React from 'react';
import PropTypes from 'prop-types';
import Brand from './brand';
import NavButton from './nav-button';

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
    const { generateRandomIndex } = this.props;
    const { currentPage } = this.state;
    return (
      <nav className="nav-bar">
        <Brand generateRandomIndex={generateRandomIndex} setCurrentPage={this.setCurrentPage} />
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

NavBar.propTypes = {
  generateRandomIndex: PropTypes.func,
};

NavBar.defaultProps = {
  generateRandomIndex: null,
};

export default NavBar;
