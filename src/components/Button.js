import PropTypes from 'prop-types'

const Button = ({text, color, onClick}) => {
  return <button onClick={onClick} className='btn' style={{backgroundColor: color, transition: 'background-color 750ms'}}>{text}</button>
}

Button.defaultProps = {
  color: 'steelblue',
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button
