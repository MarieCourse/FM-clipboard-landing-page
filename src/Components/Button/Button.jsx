import './Button.sass';
import PropTypes from 'prop-types';

function Button({ link, text, colorClassName }) {
  Button.propTypes = {
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    colorClassName: PropTypes.oneOf(['green', 'violet']).isRequired,
  };
  return (
    <div>
      <a
        href={link}
        rel="noreferrer"
        className={`button ${colorClassName}`}
        cursor="pointer"
      >
        {text}
      </a>
    </div>
  );
}

export default Button;
