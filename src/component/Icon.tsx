import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const SocialMediaIcons: React.FC = () => {
  return (
    <div className="social-icons">
      <div className="index-social-icons">
        <a
          href="https://www.facebook.com"
          className="index-icon"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook style={{ fontSize: 20 }} />
        </a>
        <a
          href="https://www.instagram.com"
          className="index-icon"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram style={{ fontSize: 20 }} />
        </a>
        <a
          href="https://www.twitter.com"
          className="index-icon"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaTwitter style={{ fontSize: 20 }} />
        </a>
        <a
          href="https://www.linkedin.com"
          className="index-icon"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin style={{ fontSize: 20 }} />
        </a>
      </div>
    </div>
  );
};

export default SocialMediaIcons;
