import { LinkButton } from "../layout/LinkButton";
import styles from "./Home.module.css";
import Container from "../layout/Container";
export default function Home() {
  return (
    
    <Container>
      <div className={styles.home_container}>
      <h1>
        Bem Vindo ao <span>Pets</span>
      </h1>
      <p>Venha encontrar o novo membro da sua familia !!!</p>
      <LinkButton to="./Cadastro" text="Cadastrar" />

    

    </div>
    </Container>
    
  );
}
