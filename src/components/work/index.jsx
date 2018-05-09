import React from 'react';
import PropTypes from 'prop-types';
import Jumbotron from '../home/jumbotron';
import Heading from '../all-purpose/heading';
import ExpandingContainer from '../all-purpose/expanding-container';

import SpaceShare1 from '../../assets/work/spaceshare1.png';
import QuietCorner1 from '../../assets/work/quietcorner1.png';
import Dynanner1 from '../../assets/work/dynanner1.png';
import CreativeConnect1 from '../../assets/work/creativeconnect1.png';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="row about-heading-container">
          <div className="about-heading">
            <Heading text="things I've made..." pattern="Pills" />
          </div>
        </div>
        {/* <Jumbotron text="Coming soon..." jumbotronIndex={0} /> */}
        <div className="row work-content-row">
          <div className="project-left project-1-container">
            <ExpandingContainer
              pattern="Dots"
              id="project-1"
              heading="SpaceShare"
              image={SpaceShare1}
              description="A progressive web app that facilitates connecting with and interacting within shared spaces."
              githubLink="https://github.com/superFruitPower/spaceShare"
              deployedLink="https://spaceshare.co/"
            />
          </div>
          <div className="project-right">
            <ExpandingContainer
              pattern="Stripes"
              id="project-2"
              heading="Quiet Corner"
              description="A website that assembles event and business recommendations based on popularity."
              image={QuietCorner1}
              githubLink="https://github.com/WeAreKumquat/quietCorner"
            />
          </div>
          <div className="project-left project-4-container">
            <ExpandingContainer
              pattern="Triangles"
              id="project-3"
              heading="Dynanner"
              image={Dynanner1}
              description="A dynamic journal-planner web app that organizes journal entries by event and encourages mindfulness"
              githubLink="https://github.com/WeAreKumquat/Dynanner"
              deployedLink="http://dynanner.com/"
            />
          </div>
          <div className="project-right">
            <ExpandingContainer
              pattern="Pills"
              id="project-4"
              heading="Creative Connect"
              image={CreativeConnect1}
              description="A minimalist mood-board creator that facilitates connection with content creators."
              stack={['AngularJS', 'Node.js', 'Express', 'Behance API', 'MongoDB', 'Google OAuth 2.0']}
              githubLink="https://github.com/emilyyu518/creative-connect"
              deployedLink="https://creative-connect.herokuapp.com/"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
