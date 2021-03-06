import { Component } from 'react';
import styles from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    query: ''
  };
  handleChange = e => {
    this.setState({query:e.currentTarget.value});
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({query:''})
  }

  render(){
    return(
    <header className={styles.Searchbar}>
      <form className={styles.SearchForm} onSubmit = {this.handleSubmit} >
        <button type="submit" className={styles.SearchFormButton}>
          <span className={styles.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={styles.SearchFormInput}
          type="text"
          autoComplete="off" 
          value={this.state.query}
          onChange={this.handleChange}     
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
    );
  }
}

export default Searchbar;