import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Brand extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [
        { color: 'rgb(207, 119, 95)' },
        { color: 'rgb(61, 0, 255)' },
        { color: 'rgb(188, 0, 119)' },
        { color: 'rgb(0, 153, 128)' },
      ],
    };
    this.shuffleColors = this.shuffleColors.bind(this);
  }
  componentDidMount() {
    this.shuffleColors();
  }
  shuffleColors() {
    const { generateRandomIndex, setCurrentPage, closeNav } = this.props;
    const { colors } = this.state;
    const colorsCopy = colors.slice(0);
    for (let i = colorsCopy.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      const colorAtRandom = colorsCopy[randomIndex];
      colorsCopy[randomIndex] = colorsCopy[i];
      colorsCopy[i] = colorAtRandom;
    }
    this.setState({ colors: colorsCopy });
    generateRandomIndex();
    setCurrentPage(null);
    closeNav();
  }
  render() {
    const { colors } = this.state;

    return (
      <Link to="/" onClick={this.shuffleColors}>
        <h1 className="futura brand">
          <span style={colors[0]}>E</span>
          <span style={colors[1]}>M</span>
          <span style={colors[2]}>I</span>
          <span style={colors[3]}>L</span>
          <span style={colors[0]}>Y</span>
          &nbsp;
          <span style={colors[1]}>Y</span>
          <span style={colors[2]}>U</span>
        </h1>
      </Link>
    );
  }
}

Brand.propTypes = {
  generateRandomIndex: PropTypes.func,
  setCurrentPage: PropTypes.func,
  closeNav: PropTypes.func,
};

Brand.defaultProps = {
  generateRandomIndex: null,
  setCurrentPage: null,
  closeNav: null,
};

export default Brand;
