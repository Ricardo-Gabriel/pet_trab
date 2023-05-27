import styles from "./ProjectCard.module.css";





export default function ProjectCard({imagem,id,name,raca,idade}) {


  return (
    <div className={styles.card}>
      <img className={styles.card_img} src={imagem} alt="Doguinho" />

      <div className={styles.card_txt}>
        
        <h3 > Nome: {name} </h3>
        <p> Raça: {raca} </p>
        <p> Idade: {idade} Anos</p>
        <p>caminho : {imagem} </p>
      </div>
    </div>
  );
}


