import React from 'react';
import PropTypes from 'prop-types';
import Jumbotron from '../home/jumbotron';
import Heading from '../all-purpose/heading';
import Headshot from '../../assets/emily_yu_cropped.jpg';

const About = (props) => {
  return (
    <div>
      <Heading text="a little about me..." pattern="Stripes" />
      <Jumbotron text="Coming soon..." jumbotronIndex={3} />
    </div>
  );
};

export default About;
