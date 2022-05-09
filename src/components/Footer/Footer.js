import React from "react";
import { SocialIcon } from 'react-social-icons';

import "../../App.css";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="copyright">
          COPYRIGHT NEKOSHI 2022. ALL RIGHTS RESERVED.
        </div>
        <div className="social-media">
          <SocialIcon target="_blank" network="facebook" bgColor="var(--primary)" url="https://www.facebook.com/nekoshi" style={{ height: 40, width: 40 }} />
          <SocialIcon target="_blank" network="instagram" bgColor="var(--primary)" url="https://www.instagram.com/nekoshi" style={{ height: 40, width: 40 }} />
          <SocialIcon target="_blank" network="twitter" bgColor="var(--primary)" url="https://www.twitter.com/nekoshi" style={{ height: 40, width: 40 }} />
          <SocialIcon target="_blank" network="pinterest" bgColor="var(--primary)" url="https://www.pinterest.com/nekoshi" style={{ height: 40, width: 40 }} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
