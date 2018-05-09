import React from 'react';
import PropTypes from 'prop-types';

import Triangles from '../../assets/triangles.svg';
import Pills from '../../assets/pills.svg';
import Stripes from '../../assets/stripes.svg';
import Dots from '../../assets/dots.svg';

const patterns = {
  Triangles: {
    backgroundImage: `url(${Triangles})`,
    backgroundSize: '12rem',
    borderColor: 'rgb(61, 0, 255)',
  },
  Pills: {
    backgroundImage: `url(${Pills})`,
    backgroundSize: '10rem',
    borderColor: 'rgb(188, 0, 119)',
  },
  Stripes: {
    backgroundImage: `url(${Stripes})`,
    backgroundSize: '50rem',
    borderColor: 'rgb(0, 153, 128)',
  },
  Dots: {
    backgroundImage: `url(${Dots})`,
    borderColor: 'rgb(207, 119, 95)',
  },
};

const colors = {
  Triangles: {
    backgroundColor: 'rgb(216,211,254)',
  },
  Pills: {
    backgroundColor: 'rgb(241,207,228)',
  },
  Stripes: {
    backgroundColor: 'rgb(208,234,230)',
  },
  Dots: {
    backgroundColor: 'rgb(245,228,224)',
  },
};

class ExpandingContainer extends React.Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.width === prevState.width) {
      return null;
    }
    return {
      height: nextProps.height,
      width: nextProps.width,
      imgWidth: nextProps.imgWidth,
    };
  }
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      height: '16rem',
      width: '35vw',
      imgWidth: '28vw',
    };
    this.toggleExpanded = this.toggleExpanded.bind(this);
  }
  toggleExpanded() {
    this.setState({ expanded: !this.state.expanded }, () => {
      const { expanded } = this.state;
      const { height, width, imgWidth } = this.props;
      if (expanded) {
        this.setState({
          height: window.matchMedia('(max-width: 758px)').matches ? '75rem' : '50rem',
          width: '80vw',
          imgWidth: window.matchMedia('(max-width: 758px)').matches ? '73vw' : '70vw',
        });
      } else {
        this.setState({ height, width, imgWidth });
      }
    });
  }
  render() {
    const { expanded, height, width, imgWidth } = this.state;
    const {
      id,
      pattern,
      heading,
      image,
      description,
      bullets,
      stack,
      githubLink,
      deployedLink,
    } = this.props;

    return (
      <div className="textbox-container expanding-container">
        <div className="textbox textbox-pattern" style={{ ...patterns[pattern], height, width, transition: 'all .5s' }} aria-hidden="true" />
        <div className="textbox textbox-solid" style={{ ...colors[pattern], height, width, transition: 'all .5s' }}>
          <div className="col">
            {/* preview */}
            <div className="preview-container">
              <div className="row expanding-container-row">
                <h2 className="work-heading">{heading}</h2>

                <div className="x-container">
                  <div className="x-box">
                    <input
                      type="checkbox"
                      className="hamburger"
                      id={id}
                      checked={expanded}
                      onChange={this.toggleExpanded}
                      />
                    <label htmlFor={id} className="x-spin">
                      <div className="x-cross horizontal" />
                      <div className="x-cross vertical" />
                    </label>
                  </div>
                </div>
              </div>

              <div className="preview-image-row">
                <div>
                  <img src={image} alt={`screenshot of ${heading}'s splash page`} style={{ width: imgWidth }} className="work-screenshot" />
                </div>
              </div>
            </div>

            {/* expanded */}
            <div className="col work-col" style={{ display: expanded ? 'inherit' : 'none' }}>
              <div className="row work-description-row">
                <div className="col work-col">
                  <p className="work-description">
                    {description}
                  </p>
                  <ul className="bullets-list">
                    {bullets.map(bullet => (
                      <li>{bullet}</li>
                    ))}
                  </ul>
                </div>
                <div className="col work-col">
                  <h4 className="stack-heading">Tech Stack</h4>
                  <ul className="stack-list">
                    {stack.map(technology => (
                      <li>{technology}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="row work-links-row">
                <a href={githubLink} target="_blank" title="Github link" aria-label="Github link">
                  <span className="fab fa-github fa-2x" />
                </a>
                {deployedLink && (
                  <a href={deployedLink} target="_blank" title="deployed link" aria-label="deployed link">
                    <span className="fas fa-link fa-2x deployed-link" />
                  </a>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

ExpandingContainer.propTypes = {
  id: PropTypes.string,
  pattern: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  imgWidth: PropTypes.string,
  heading: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  bullets: PropTypes.arrayOf(PropTypes.string),
  stack: PropTypes.arrayOf(PropTypes.string),
  githubLink: PropTypes.string,
  deployedLink: PropTypes.string,
};

ExpandingContainer.defaultProps = {
  id: '',
  pattern: 'Dots',
  height: window.matchMedia('(max-width: 758px)').matches ? '14rem' : '16rem',
  width: window.matchMedia('(max-width: 758px)').matches ? '80vw' : '35vw',
  imgWidth: window.matchMedia('(max-width: 758px)').matches ? '73vw' : '28vw',
  heading: '',
  image: '',
  description: '',
  bullets: [],
  stack: [],
  githubLink: '',
  deployedLink: '',
};

export default ExpandingContainer;
