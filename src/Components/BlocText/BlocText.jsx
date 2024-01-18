import PropTypes from 'prop-types';
import './BlocText.sass';

function BlocText({
  icon,
  alt,
  level,
  title,
  paragraph,
  alignClassName,
  levelClassName,
}) {
  const HeadingTag = `h${level}`;

  return (
    <div className={`blocText ${alignClassName} ${levelClassName}`}>
      {icon && <img src={icon} alt={alt} />}
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
  alignClassName: PropTypes.oneOf(['al-left', 'al-center']),
  levelClassName: PropTypes.oneOf(['lv-1', 'lv-2', 'lv-3']),
};

BlocText.defaultProps = {
  alignClassName: 'al-center',
};

export default BlocText;
