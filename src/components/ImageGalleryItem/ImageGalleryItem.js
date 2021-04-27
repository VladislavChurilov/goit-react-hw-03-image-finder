import styles from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';


const ImageGalleryItem = ({ url, name, onClick }) => (
    <li className= {styles.ImageGalleryItem} >
        <img className={styles.ImageGalleryItemImage} src= {url} alt={name} onClick={onClick} />
    </li>
)
ImageGalleryItem.propTypes = {
    url: PropTypes.string.isRequired,    
    name: PropTypes.string.isRequired,
    onClick:PropTypes.func.isRequired,    
  };

export default ImageGalleryItem;