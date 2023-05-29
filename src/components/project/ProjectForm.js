import Container from "../layout/Container";
import styles from "./ProjectForm.module.css";


import React, { useState } from 'react';

export default function ProjectForm() {
  const [clientes, setClientes] = useState({
    id: 0,
    nome: '',
    cpf: '',
    rg: '',
    endereco: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setClientes((prevCliente) => ({
      ...prevCliente,
      [name]: value
    }));
  };

  const createPost = async (event) => {
    event.preventDefault();

    const novoCliente = {
      ...clientes,
      id: Date.now() // Defina um ID único aqui, por exemplo, usando a data atual
    };

    try {
      await fetch('http://localhost:5000/clientes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(novoCliente)
      });
      alert('Cliente cadastrado com sucesso!');
      setClientes({
        id: 0,
        nome: '',
        cpf: '',
        rg: '',
        endereco: '',
        numero: '',
        complemento: '',
        bairro: '',
        cidade: ''
      });
    } catch (error) {
      console.error('Erro ao cadastrar o cliente:', error);
      alert('Erro ao cadastrar o cliente. Por favor, tente novamente.');
    }
  };

  return (
    <Container>
      <div className={styles.formulario}>
        <h1>Cadastro</h1>
        <br />
        <div className={styles.item}>
          <label htmlFor="nome">Nome completo</label>
          <input type="text" name="nome" id="nome" value={clientes.nome} onChange={handleChange}></input>
        </div>
        <div className={styles.item}>
          <label htmlFor="cpf">CPF</label>
          <input type="text" name="cpf" id="cpf" value={clientes.cpf} onChange={handleChange}></input>
        </div>
        <div className={styles.item}>
          <label htmlFor="rg">RG</label>
          <input type="text" name="rg" id="rg" value={clientes.rg} onChange={handleChange}></input>
        </div>
        <div className={styles.item}>
          <label htmlFor="endereco">Rua</label>
          <input type="text" name="endereco" id="endereco" value={clientes.endereco} onChange={handleChange}></input>
        </div>
        <div className={styles.item}>
          <label htmlFor="numero">Nº</label>
          <input type="text" name="numero" id="numero" value={clientes.numero} onChange={handleChange}></input>
        </div>
        <div className={styles.item}>
          <label htmlFor="complemento">Complemento</label>
          <input type="text" name="complemento" id="complemento" value={clientes.complemento} onChange={handleChange}></input>
        </div>
        <div className={styles.item}>
          <label htmlFor="bairro">Bairro</label>
          <input type="text" name="bairro" id="bairro" value={clientes.bairro} onChange={handleChange}></input>
        </div>
        <div className={styles.item}>
          <label htmlFor="cidade">Cidade</label>
          <input type="text" name="cidade" id="cidade" value={clientes.cidade} onChange={handleChange}></input>
        </div>

        <button type="submit" className={styles.item} onClick={createPost}>Cadastrar</button>
      </div>
    </Container>
  );
}


