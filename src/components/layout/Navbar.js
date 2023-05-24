import { Link } from 'react-router-dom/dist'

import styles from './Navbar.module.css'
import Container from './Container'
import logo from '../img/logo.jpg'


export default function Navbar(){
    return(
        <nav className={styles.navbar}>
        <Container >
            <Link to="/">
                <div>
                    <img src={logo} alt="Logo"></img>
                </div>
                
            </Link>
            <ul className={styles.list}>
                <li className={styles.item}><Link to="/">Home</Link></li>
                <li className={styles.item}><Link to="/Cadastro">Cadastro</Link></li>
                <li className={styles.item}><Link to="/Catalogo">Catalogo</Link></li>
            </ul>
        </Container>
    
  </nav>
    )
}