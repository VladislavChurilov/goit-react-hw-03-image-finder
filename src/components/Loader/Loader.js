import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Load from "react-loader-spinner";
import { Component } from "react";
import styles from '../Button/Button.module.css';

 class Loader extends Component {    
    render() {
      return (
        <Load
          className={styles.Loader}
          type="ThreeDots" 
          color="#00BFFF" 
          height={80} 
          width={80}        
          timeout={3000} />
      );
    }
  }

export default Loader;