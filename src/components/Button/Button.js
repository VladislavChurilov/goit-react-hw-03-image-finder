import styles from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
    window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
    });
    return(
    <button type='button' onClick={onClick} className= {styles.button}>
        Load more
    </button>
)}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,    
  };
export default Button;