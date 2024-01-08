import PropTypes from 'prop-types';
import './BlocText.sass';

function BlocText({ icon, alt, level, title, paragraph, alignClassName }) {
  const HeadingTag = `h${level}`;

  return (
    <div className={`blocText ${alignClassName}`}>
      <img src={icon} alt={alt} />
      <HeadingTag>{title}</HeadingTag>
      <p>{paragraph}</p>
    </div>
  );
}
BlocText.propTypes = {
  icon: PropTypes.string,
  alt: PropTypes.string,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  title: PropTypes.node.isRequired,
  paragraph: PropTypes.node.isRequired,
  alignClassName: PropTypes.oneOf(['left', 'center']),
};

BlocText.defaultProps = {
  alignClassName: 'center',
};

export default BlocText;
