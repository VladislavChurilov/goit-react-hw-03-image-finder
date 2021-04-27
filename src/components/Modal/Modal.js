import { createPortal } from 'react-dom';
import { Component } from 'react';
import styles from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

  class Modal extends Component {
    componentDidMount() {
      window.addEventListener('keydown', this.hendleKeyDown);
    }    
    componentWillUnmount() {
      window.removeEventListener('keydown', this.hendleKeyDown);
    }
    hendleKeyDown = e => {
      if (e.code === 'Escape') {
        this.props.showModal();
      }
    };
    hendleBecdropClick = e => {
      if (e.currentTarget === e.target) {
        this.props.showModal();
      }
    };

    render(){
      return createPortal(
        <div className={styles.overlay} onClick={this.hendleBecdropClick} >
          <div className={styles.modal} >
            {this.props.children}            
          </div>
        </div>,
        modalRoot,
      );
    }
  }
export default Modal;