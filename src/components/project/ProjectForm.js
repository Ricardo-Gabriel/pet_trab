import Container from "../layout/Container";
import styles from "./ProjectForm.module.css";


export default function ProjectForm() {
  return (

       <Container>
          <div className={styles.formulario} >
          <h1>Cadastro</h1>
          <br />
          <div className={styles.item}>
            <label for="nome">Nome completo</label>
            <input type="text" name="nome" id="nome"></input>
          </div>
          <div className={styles.item}>
            <label for="cpf">CPF</label>
            <input type="text" name="cpf" id="cpf"></input>
          </div>
    
          <div className={styles.item}>
            <label for="rg">RG</label>
            <input type="text" name="rg" id="rg"></input>
          </div>
          <div className={styles.item}>
            <label for="endereco">Rua</label>
            <input type="text" name="endereco" id="endereco"></input>
          </div>
          <div className={styles.item}>
            <label for="numero">Nº</label>
            <input type="text" name="numero" id="numero"></input>
          </div>
          <div className={styles.item}>
            <label for="complemento">Complemento</label>
            <input type="text" name="complemento" id="complemento"></input>
          </div>
          <div className={styles.item}>
            <label for="bairro">Bairro</label>
            <input type="text" name="bairro" id="bairro"></input>
          </div>
          <div className={styles.item}>
            <label for="Cidade">Cidade</label>
            <input type="text" name="Cidade" id="Cidade"></input>
          </div>
    
          <button type="submit" className="item">Cadastrar</button>
          </div>  

         
        </Container>

    
    
   
  );
}
