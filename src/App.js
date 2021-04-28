import { Component } from 'react';
import Conteiner from './components/Conteiner';
import Button from './components/Button';
import ImageGallery from './components/ImageGallery';
import Loader from './components/Loader';
import Modal from './components/Modal';
import Searchbar from './components/Searchbar';
import Api from './Services/Api';

class App extends Component {
state = {
  gallery: [],
  currentPage: 1,
  searchQuery: '',
  largeImage: '',
  isLoading: false,
  showModal: false,
  error: null 
}

componentDidUpdate(prevProps, prevState) {
  if(prevState.searchQuery !== this.state.searchQuery) {
    this.fetchPictures();
  }
  if (prevState.currentPage > 1 && prevState.currentPage !== this.state.currentPage ) {
    window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
    });
  }  
}
onChangeQuery = query =>{
  this.setState({
    searchQuery: query,
    currentPage: 1,
    gallery: [],
    error: null,
  }); 
}

fetchPictures = () => {
  const { currentPage, searchQuery } = this.state;
  const options = { searchQuery,currentPage };
  this.setState({isLoading: true });  
  
  Api(options)  
  .then(gallery => {
    this.setState(prevState => ({
      gallery: [ ...prevState.gallery, ...gallery],
      currentPage: prevState.currentPage + 1, 
    }));    
  })
  .catch(error => this.state({error}))
  .finally(() => this.setState({isLoading: false }));
};

toggleModal = () => {
  this.setState(state => ({
    showModal: !state.showModal,
  }));
};

getBigImage = (largeImage) => {
  this.setState({ largeImage });
  this.toggleModal();
};
render(){
  const { gallery, isLoading, showModal, largeImage, error } = this.state;
  const shouldRenderLoadMoreButton = gallery.length > 0 && !isLoading;  
  
  return (
  <Conteiner>
    {error && <h1>{error}</h1>}
    <Searchbar onSubmit={this.onChangeQuery} />
    <ImageGallery gallery={gallery} bigImage={this.getBigImage} />   
    {isLoading && <Loader/>   }
    { shouldRenderLoadMoreButton && <Button onClick={this.fetchPictures} /> }  
  
    {showModal && <Modal showModal={this.getBigImage}>
      <img src={largeImage} alt="Должна быть фотография" />
    </Modal>}
  </Conteiner>
  )};
}

export default App;
