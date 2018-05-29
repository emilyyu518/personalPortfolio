import React from 'react';
import SocialMediaButton from './social-media-button';

const Footer = (props) => {
  return (
    <footer className="footer">
      <SocialMediaButton
        name="Emily Yu's LinkedIn"
        link="https://www.linkedin.com/in/emilyyu518/"
        icon="fab fa-linkedin-in"
      />
      <SocialMediaButton
        name="Emily Yu's Github"
        link="https://github.com/emilyyu518"
        icon="fab fa-github"
      />
      <SocialMediaButton
        name="Emily Yu's email"
        link="mailto:hello@emilyyu.me"
        icon="fas fa-envelope"
      />
    </footer>
  );
};

export default Footer;
