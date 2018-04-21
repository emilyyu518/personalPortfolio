import React from 'react';
import PropTypes from 'prop-types';
import Jumbotron from '../home/jumbotron';
import Heading from '../all-purpose/heading';
import ImageContainer from '../all-purpose/image-container';
import Headshot from '../../assets/emily_yu_cropped.jpg';
import TextContainer from '../all-purpose/text-container';
import IconListItem from './iconListItem';

const About = (props) => {
  return (
    <div className="about">
      <div className="row about-heading-container">
        <div className="about-heading">
          <Heading text="a little about me..." pattern="Stripes" />
        </div>
      </div>

      <div className="row about-row">
        <div className="about-col-left col">
          <div className="headshot-container">
            <ImageContainer image={Headshot} pattern="Dots" height="20rem" width="auto" alt="Emily Yu" imgClass="headshot" />
          </div>
        </div>

        <div className="col about-col-right fast-facts-col">
          <div className="fast-facts">
            <TextContainer pattern="Pills">
              <div className="fast-facts-text">
                <div className="bullet-list-heading row">
                  <h2>
                    <span className="fas fa-bolt icon-margin" />
                    fast facts
                  </h2>
                </div>
                <div className="row fast-facts-row">
                  <div className="col">
                    <ul className="icon-list">
                      <IconListItem icon="fas fa-map-marker" text="New Orleans, LA" label="location icon" />
                      <IconListItem icon="fas fa-desktop" text="Programmer / Designer" iconClass="profession-list-item" label="computer icon" />
                    </ul>
                  </div>
                  <div className="col">
                    <ul className="icon-list">
                      <IconListItem icon="fas fa-paw" text="Cat lover" label="paw print icon" />
                      <IconListItem icon="fas fa-headphones" text="Avid podcast listener" label="headphones icon" />
                    </ul>
                  </div>
                  <div className="col">
                    <ul className="icon-list">
                      <IconListItem icon="fas fa-coffee" text="Coffee enthusiast" label="coffee icon" />
                      <IconListItem icon="fas fa-cut" text="General craftmaker" iconClass="craftmaker-list-item" label="scissor icon" />
                    </ul>
                  </div>
                </div>
              </div>
            </TextContainer>
          </div>
        </div>
      </div>

      <div className="row about-row">
        <div className="col about-col-left">
          <div className="skills-container">
            <TextContainer pattern="Pills">
              <div className="fast-facts-text">
                <div className="row bullet-list-heading">
                  <h2>
                    <span className="fas fa-wrench icon-margin" />
                    my skills
                  </h2>
                </div>
                <div className="row fast-facts-row">
                  <div className="col">
                    <ul>
                      <li>JavaScript, HTML, CSS</li>
                      <li>React, AngularJS</li>
                      <li>Node.js, Express</li>
                      <li>MySQL, MongoDB</li>
                      <li>Git</li>
                    </ul>
                  </div>
                  <div className="col">
                    <ul>
                      <li>Bootstrap, Sass</li>
                      <li>Webpack, Babel</li>
                      <li>Adobe Creative Suite</li>
                      <li>RESTful APIs</li>
                      <li>AWS</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TextContainer>
          </div>
        </div>

        <div className="col about-col-right">
          <div className="about-me">
            <TextContainer pattern="Triangles">
              <div className="about-me-text">
                <p>
                  I am a full-stack developer with a specialty in front-end
                  design. While programming and design are my passions, the
                  people who will use our code are just as important: I truly
                  believe that all applications should be not only beautiful
                  to look at but also intuitive and accessible for all users.
                </p>
                <p>
                  When I&apos;m not coding, I enjoy doing crossword puzzles at my
                  favorite cafés, reading novels that take me far from this
                  realm of reality, and making things with my hands&mdash;from my
                  next Mardi Gras costume to stuffed animals for my cat.
                </p>
              </div>
            </TextContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
