import styles from "./ProjectCard.module.css";
import dog from "../img/snoop.jpg";

export default function ProjectCard() {
  return (
    <div className={styles.card}>
      <img className={styles.card_img} src={dog} alt="Doguinho" />

      <div className={styles.card_txt}>
        <h3 >Snoop Human</h3>
        <p>Texto</p>
        
      </div>
    </div>
  );
}
