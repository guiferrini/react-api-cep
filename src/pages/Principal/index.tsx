import React, { useState, useEffect, FormEvent } from 'react';

import api from '../../services/api';

import { Titulo, Form, Output } from './styles';

interface Repository {
  bairro: string;
  cep: number;
  complemento: string;
  gia: number;
  ibge: number;
  localidade: string;
  logradouro: string;
  uf: string;
  unidade: string;
}

const Principal: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storageRepositories = localStorage.getItem('@Api_CEP:repositories');

    if (storageRepositories) {
      return JSON.parse(storageRepositories); // .parse p desfazer .stringify
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(
      '@Api_GitHub:repositories',
      JSON.stringify(repositories)
    );
  }, [repositories]);

  async function buscar(event: FormEvent<HTMLFormElement>
    ): Promise<void> {
      event.preventDefault();

    console.log('lalala2');
    try {
      const response = await api.get(`/${newRepo}/json`);

      //console.log(response.data);
      const repository = response.data;

      setRepositories([...repositories, repository]);
      setNewRepo('');
      console.log(repositories);
      console.log(repository);

    } catch (err) {
      setInputError('Erro no CEP digitado, favor verificar');

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

    { inputError && <Output>{inputError}</Output> }
    <Output>
      {repositories.map(repository => (
        <div key={repository.localidade}>
          <h1>Localidade: {repository.localidade}</h1>
          <h2>Logradouro: {repository.logradouro}</h2>
          <h2>Bairro: {repository.bairro}</h2>
          <h2>UF: {repository.uf}</h2>
        </div>

      )
      )}
    </Output>
  </>
);

};

export default Principal;
