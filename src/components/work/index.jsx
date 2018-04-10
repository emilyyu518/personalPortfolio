import React from 'react';
import PropTypes from 'prop-types';
import Jumbotron from '../home/jumbotron';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Jumbotron text="Coming soon..." jumbotronIndex={0} />
      </div>
    );
  }
}

export default Portfolio;
