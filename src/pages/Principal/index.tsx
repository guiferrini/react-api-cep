import React, { useState, useEffect, FormEvent } from 'react';

import api from '../../services/api';

import { Titulo, Form, Output } from './styles';

const Principal: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  //const[repositories, setRepositories] = useState('');
  const [inputError, setInputError] = useState('');


  async function buscar(event: FormEvent<HTMLFormElement>
    ): Promise<void> {
      event.preventDefault();

    console.log('lalala2');
    try {
      const response = await api.get(`/${newRepo}/json`);

      console.log(response.data);

    } catch (err) {
      console.log('lalala3');
    }

  }

return (
  <>
    <Titulo>Buscador de CEP</Titulo>

    <Form onSubmit={buscar}>
      <input
        value={newRepo}
        onChange={(e) => setNewRepo(e.target.value)}
        placeholder="Digite o CEP - só números"
        type="text"
      />
      <button type="submit">Buscar</button>
    </Form>

    <Output>
      <h1>Logradouro: Praça da Sé</h1>
      <h2>Bairro: Sé</h2>
      <h2>Localidade: São Paulo</h2>
      <h2>UF: SP</h2>
    </Output>
  </>
);

};

export default Principal;
