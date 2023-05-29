import ProjectCard from "../project/ProjectCard";
import styles from "./Catalogo.module.css";
import Container from "../layout/Container"

import { useEffect, useState } from "react";
    
    export default function Catalogo() {
      const [Animais, setAnimais] = useState([]);
    
      useEffect(() => {
        fetch("http://localhost:5000/Animais", {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        })
          .then((resp) => resp.json())
          .then((data) => {
            console.log(data);
            setAnimais(data);
          })
          .catch((err) => console.log(err));
      }, []);
    
      return (
        
        <Container>
           <div className={styles.Catalogo}>
          
          {Animais.length > 0 &&
            Animais.map((animais) => (
              <ProjectCard
                key={animais.id}
                imagem={animais.imagem}
                name={animais.nome}
                raca={animais.raca}
                idade={animais.idade}
              />
            ))}
        </div>
        </Container>
       
      );
    }


