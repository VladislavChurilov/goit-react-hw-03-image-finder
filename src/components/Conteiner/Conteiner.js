import styles from './Conteiner.module.css';

const Conteiner = ({children}) =>(    
    <div className={styles.conteiner} >        
    {children}        
    </div> 
)

export default Conteiner;