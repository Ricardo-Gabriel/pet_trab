import styles from './Footer.module.css'

import {FaFacebook, FaInstagram,FaLinkedin} from 'react-icons/fa'



export function Footer(){
    return (
        <footer className={styles.footer}>
           
           <ul className={styles.social_list}>
            <li ><FaFacebook className={styles.icon} /></li>
            <li><FaInstagram className={styles.icon}/></li>
            <li><FaLinkedin className={styles.icon}/></li>
           </ul>
       
        </footer>
    )
}