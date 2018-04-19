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
      <div className="row heading-container">
        <Heading text="a little about me..." pattern="Stripes" />
      </div>
      <div className="row about-row">
        <div className="about-col-left col">
          <ImageContainer image={Headshot} pattern="Dots" height="20rem" width="auto" alt="Emily Yu" />
          <div className="skills-container">
            <TextContainer pattern="Pills">
              <div className="fast-facts-text">
                <div className="row">
                  <h2>
                    <span className="fas fa-wrench icon-margin" />
                    my skills
                  </h2>
                </div>
                <div className="row">
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
          <div className="fast-facts">
            <TextContainer pattern="Pills">
              <div className="fast-facts-text">
                <div className="row">
                  <h2>
                    <span className="fas fa-bolt icon-margin" />
                    fast facts
                  </h2>
                </div>
                <div className="row">
                  <div className="col">
                    <ul className="icon-list">
                      <IconListItem icon="fas fa-map-marker" text="New Orleans, LA" />
                      <IconListItem icon="fas fa-desktop" text="Programmer / Designer" iconClass="profession-list-item" />
                    </ul>
                  </div>
                  <div className="col">
                    <ul className="icon-list">
                      <IconListItem icon="fas fa-paw" text="Cat lover" />
                      <IconListItem icon="fas fa-headphones" text="Avid podcast listener" />
                    </ul>
                  </div>
                  <div className="col">
                    <ul className="icon-list">
                      <IconListItem icon="fas fa-coffee" text="Coffee enthusiast" />
                      <IconListItem icon="fas fa-cut" text="General craftmaker" iconClass="craftmaker-list-item" />
                    </ul>
                  </div>
                </div>
              </div>
            </TextContainer>
          </div>
          <div className="about-me">
            <TextContainer pattern="Triangles">
              <div className="about-me-text">
                <p>
                  Lorem ipsum dolor sit amet, eu sanctus laoreet vel. Mundi
                  commune cum in, ad enim cibo definitiones vim. Harum dicunt
                  suscipiantur his an. At mea dolorum utroque veritus. Ius ea
                  paulo tacimates, ei nam posse tractatos accommodare, sed paulo
                  saepe gubergren at.
                </p>
                <p>
                  An vix mentitum officiis, quo ea nisl nusquam periculis. At sed
                  propriae platonem gloriatur. Ius cu ubique prodesset, mentitum
                  persecuti te usu. At has assum causae vituperata. Eum quis
                  reprimique disputationi an, usu ex discere eloquentiam, in
                  eripuit splendide his. Brute assum mea eu, mei ea liber eleifend
                  eloquentiam, sed eu diam essent.
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
