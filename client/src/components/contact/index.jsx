import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Jumbotron from '../home/jumbotron';
import Heading from '../all-purpose/heading';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: '',
    };
    this.getResponse = this.getResponse.bind(this);
  }
  componentDidMount() {
    this.getResponse();
  }
  getResponse() {
    axios.get('/api/contact')
      .then((response) => {
        this.setState({ response: response.data });
      })
      .catch((error) => {
        console.error('error getting response', error);
      });
  }
  render() {
    const { response } = this.state;
    return (
      <div>
        <div className="row about-heading-container">
          <div className="about-heading">
            <Heading text={response} pattern="Triangles" />
          </div>
        </div>
        <Jumbotron text="Coming soon..." jumbotronIndex={1} />
      </div>
    );
  }
}

export default Contact;
