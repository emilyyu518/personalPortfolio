import React from 'react';
import PropTypes from 'prop-types';
import Triangles from '../../assets/triangles.svg';
import Pills from '../../assets/pills.svg';
import Stripes from '../../assets/stripes.svg';
import Dots from '../../assets/dots.svg';
import '../../styles/css/home.css';


const patterns = [Triangles, Pills, Stripes, Dots];
class Home extends React.Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.jumbotronIndex === prevState.backgroundImage) {
      return null;
    }
    return { jumbotronBg: { backgroundImage: `url(${patterns[nextProps.jumbotronIndex]})` } };
  }
  constructor(props) {
    super(props);
    this.state = {
      jumbotronBg: {
        backgroundImage: 'url(Triangles)',
      },
    };
  }

  render() {
    const { jumbotronBg } = this.state;
    return (
      <div>
        <div className="jumbotron-container">
          <div className="jumbotron" style={jumbotronBg} />
          <h1 className="jumbotron-text">Hi, I&apos;m Emily.</h1>
        </div>
      </div>
    );
  }
}

export default Home;
