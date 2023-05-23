import { LinkButton } from '../layout/LinkButton'
import styles from './Home.module.css'



export default function Home(){
    return(
        <section className={styles.home_container}>
        <h1>Bem Vindo ao <span>Pets</span></h1>
        <p>Venha encontrar o novo membro da sua familia !!!</p>
        <LinkButton to='./Cadastro' text='Cadastrar'/>
        
        
    </section>
    )
    
}