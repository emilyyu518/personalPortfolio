import React from 'react';
import PropTypes from 'prop-types';
import Jumbotron from '../home/jumbotron';
import Heading from '../all-purpose/heading';
import ExpandingContainer from '../all-purpose/expanding-container';

import SpaceShare1 from '../../assets/work/spaceshare1.png';
import QuietCorner1 from '../../assets/work/quietcorner1.png';
import Dynanner1 from '../../assets/work/dynanner1.png';
import CreativeConnect1 from '../../assets/work/creativeconnect1.png';

const spaceShareBullets = [
  'Engineered in-app chat system with Nexmo Stitch service, custom React components, and Express server-side logic',
  'Designed and wireframed an engaging UI with Adobe InDesign',
  'Translated wireframes accurately into an accessible and responsive interface with React and Bootstrap',
  'Incorporated image management with AWS S3 so users can upload files quickly and securely',
  'Automated deployment with speed and efficiency with AWS CodeDeploy',
  'Managed and maintained user data with a MySQL database and Sequelize',
  'Facilitated connections between users with a personalized search algorithm',
];

const quietCornerBullets = [
  'Aggregated a diverse data-set by working with Google Places API, Facebook Graph API, and third-party libraries',
  'Visualized data in multiple forms with the Google Maps API and custom AngularJS components',
  'Overhauled UI and UX, utilizing Bootstrap to create visual consistency across app',
];

const dynannerBullets = [
  'Authenticated with Google OAuth 2.0 and used it in conjunction with Google Calendar API to synchronize calendars',
  'Deployed with DigitalOcean, creating a reverse proxy server with NGINX and managing server processes with PM2',
  'Built multi-view single-page application, using React Router to manage the complexity of navigating between many different views',
];

const creativeConnectBullets = [
  'Designed an MVC architecture adhering to best practices and implemented it with AngularJS, Node.js, and Express',
  'Queried the Behance API to populate a MongoDB database with users’ preferred content',
  'Implemented authentication with Google OAuth 2.0 to create a personalized experience for each user',
];

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      device: 'desktop',
    };
    this.detectScreenSize = this.detectScreenSize.bind(this);
  }
  componentDidMount() {
    this.detectScreenSize();
    window.addEventListener('orientationchange', this.detectScreenSize());
  }
  componentWillUnmount() {
    window.removeEventListener('orientationchange', this.detectScreenSize());
  }
  detectScreenSize() {
    if (window.matchMedia('(max-width: 758px)').matches) {
      this.setState({ device: 'mobile' });
    } else if (window.matchMedia('(max-width: 1020px)').matches) {
      this.setState({ device: 'tablet' });
    } else {
      this.setState({ device: 'desktop' });
    }
  }
  render() {
    const { device } = this.state;
    let height = '16rem';
    let width = '35vw';
    let imgWidth = '28vw';

    if (device === 'mobile') {
      height = '14rem';
      width = '80vw';
      imgWidth = '73vw';
    } else if (device === 'tablet') {
      height = '13rem';
      width = '38vw';
      imgWidth = '32vw';
    }
    return (
      <div>
        <div className="row about-heading-container">
          <div className="about-heading">
            <Heading text="things I've made..." pattern="Pills" />
          </div>
        </div>

        <div className="row work-content-row">
          <div className="project-left project-1-container">
            <ExpandingContainer
              pattern="Dots"
              id="project-1"
              heading="SpaceShare"
              image={SpaceShare1}
              description="A progressive web app that facilitates connecting with and interacting within shared spaces."
              bullets={spaceShareBullets}
              stack={['React', 'Node.js', 'MySQL', 'Bootstrap', 'Facebook Login', 'Nexmo Stitch', 'AWS']}
              githubLink="https://github.com/superFruitPower/spaceShare"
              deployedLink="https://spaceshare.co/"
              height={height}
              width={width}
              imgWidth={imgWidth}
              mobileExpandedHeight="65rem"
              tabletExpandedHeight="45rem"
            />
          </div>
          <div className="project-right">
            <ExpandingContainer
              pattern="Stripes"
              id="project-2"
              heading="Quiet Corner"
              description="A website that assembles event and business recommendations based on popularity."
              bullets={quietCornerBullets}
              stack={['AngularJS', 'Node.js', 'MySQL', 'Bootstrap', 'Google Places API', 'Songkick API', 'Facebook Graph API']}
              image={QuietCorner1}
              githubLink="https://github.com/WeAreKumquat/quietCorner"
              height={height}
              width={width}
              imgWidth={imgWidth}
              mobileExpandedHeight="49rem"
              />
          </div>
          <div className="project-left project-4-container">
            <ExpandingContainer
              pattern="Triangles"
              id="project-3"
              heading="Dynanner"
              image={Dynanner1}
              description="A dynamic journal-planner web app that organizes journal entries by event and encourages mindfulness"
              bullets={dynannerBullets}
              stack={['React', 'Node.js', 'MongoDB', 'Bootstrap', 'Google OAuth 2.0', 'Google Calendar API', 'Digital Ocean']}
              githubLink="https://github.com/WeAreKumquat/Dynanner"
              deployedLink="http://dynanner.com/"
              height={height}
              width={width}
              imgWidth={imgWidth}
              mobileExpandedHeight="55rem"
              />
          </div>
          <div className="project-right">
            <ExpandingContainer
              pattern="Pills"
              id="project-4"
              heading="Creative Connect"
              image={CreativeConnect1}
              description="A minimalist mood-board creator that facilitates connection with content creators."
              bullets={creativeConnectBullets}
              stack={['AngularJS', 'Node.js', 'Express', 'MongoDB', 'Bootstrap', 'Behance API', 'Google OAuth 2.0']}
              githubLink="https://github.com/emilyyu518/creative-connect"
              deployedLink="https://creative-connect.herokuapp.com/"
              height={height}
              width={width}
              imgWidth={imgWidth}
              mobileExpandedHeight="50rem"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
