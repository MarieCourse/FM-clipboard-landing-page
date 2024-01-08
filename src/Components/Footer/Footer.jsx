import './Footer.sass';

function Footer() {
  return (
    <div className="footer">
      <img
        src="src/assets/logo.svg"
        alt="Logo Clipboard"
        className="footer__logo"
      />
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
        <img src="src/assets/icon-facebook.svg" alt="Logo Facebook" />
        <img src="src/assets/icon-twitter.svg" alt="Logo Twitter" />
        <img src="src/assets/icon-instagram.svg" alt="Logo Instagram" />
      </div>
    </div>
  );
}

export default Footer;
