import React from 'react';
import PropTypes from 'prop-types';
import Jumbotron from './jumbotron';
import '../../styles/css/home.css';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { jumbotronIndex } = this.props;
    return (
      <div>
        <Jumbotron text="Hi, I'm Emily" jumbotronIndex={jumbotronIndex} />
      </div>
    );
  }
}

Home.propTypes = {
  jumbotronIndex: PropTypes.number,
};

Home.defaultProps = {
  jumbotronIndex: 0,
};

export default Home;
