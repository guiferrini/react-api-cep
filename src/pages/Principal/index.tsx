import React from 'react';

import { Titulo, Form, Output } from './styles';

const Principal: React.FC = () => {

return (
  <>
    <Titulo>Buscador de CEP</Titulo>

    <Form >
      <input
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
