import styles from "./ProjectCard.module.css";
import React from "react";




export default function ProjectCard({imagem,id,name,raca,idade}) {

  const imagePath = require(`../../img/${imagem}`);
  return (
    <div className={styles.card}>
    

      <div className={styles.card_txt}>
        <img className={styles.card_img} src={imagePath} alt="Doguinho" />
        <h3 > Nome: {name} </h3>
        <p> Raça: {raca} </p>
        <p> Idade: {idade} Anos</p>
        <button type="submit"> Adotar</button>
      </div>
    </div>
  );
}


