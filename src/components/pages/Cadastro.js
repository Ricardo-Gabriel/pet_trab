import ProjectForm from '../project/ProjectForm';
import styles from './Cadastro.module.css';
import Container from '../layout/Container'
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";


export default function Cadastro(){
    
    /**
        const [clientes, setClientes] = useState([]);
        
      
        const location = useLocation();
      
        let message = "";
      
       
        useEffect(() => {
          setTimeout(() => {
            fetch("http://localhost:5000/clientes", {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            })
              .then((resp) => resp.json())
              .then((data) => {
                setClientes(data);
                console.log(data);
              })
              .catch((err) => console.log(err));
          }, 300);
        }, []);
    
    
        function handleChange(e){
            setClientes({...project,[e.target.name]: e.target.value})
    
    }*/
    return(
        
          <Container>
           
             <ProjectForm  ></ProjectForm>
            
            
          </Container>  
            
           
       
    )
}