import './Footer.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSquareFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import Logo from '../src/assets/logo.svg';

function Footer() {
  return (
    <div className="footer">
      <img src={Logo} alt="Logo Clipboard" className="footer__logo" />
      <ul>
        <li>
          <a href="#">FAQ's</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        <li>
          <a href="#">Press Kit</a>
        </li>
        <li>
          <a href="#">Install Guide</a>
        </li>
      </ul>
      <div className="footer__icons">
        <FontAwesomeIcon icon={faSquareFacebook} className="icon" />
        <FontAwesomeIcon icon={faTwitter} className="icon" />
        <FontAwesomeIcon icon={faInstagram} className="icon" />
      </div>
    </div>
  );
}

export default Footer;
