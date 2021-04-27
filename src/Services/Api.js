import axios from 'axios';
import PropTypes from 'prop-types';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '20658315-dd3dbd2a0550adf6d5ae10318';

  const Api = ({searchQuery = '', currentPage = 1 }) => {   
  return axios.get(
    `?q=${searchQuery}&page=${currentPage}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,)
    .then(response => response.data.hits);    
  };

  Api.propTypes = {
    searchQuery: PropTypes.string.isRequired,    
    currentPage: PropTypes.number.isRequired,    
  };

 

  export default Api;