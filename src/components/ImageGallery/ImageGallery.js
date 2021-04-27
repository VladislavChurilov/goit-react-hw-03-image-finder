import styles from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';
import PropTypes from 'prop-types';

const ImageGallery = ({gallery, bigImage}) => (
<ul className= {styles.ImageGallery}>
  {gallery.map(({id, webformatURL, user, largeImageURL }) => {
  const handleItemClick = () => bigImage(largeImageURL);
  return(
  <ImageGalleryItem key={id} name={user} url = {webformatURL} onClick={handleItemClick} />
  )})
  }
</ul>
);

ImageGallery.propTypes = {
  gallery: PropTypes.arrayOf(PropTypes.object).isRequired, 
  bigImage: PropTypes.func.isRequired,  
};
export default ImageGallery;