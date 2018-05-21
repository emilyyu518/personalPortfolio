import React from 'react';
import PropTypes from 'prop-types';
import Jumbotron from '../home/jumbotron';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Jumbotron text="Coming soon..." jumbotronIndex={1} />
      </div>
    );
  }
}

export default Contact;
