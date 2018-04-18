import React from 'react';
import PropTypes from 'prop-types';
import Jumbotron from '../home/jumbotron';
import Heading from '../all-purpose/heading';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Heading text="a selection of my work..." pattern="Pills" />
        <Jumbotron text="Coming soon..." jumbotronIndex={0} />
      </div>
    );
  }
}

export default Portfolio;
