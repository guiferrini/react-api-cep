import styled from 'styled-components';

export const Titulo = styled.h1`
  display: flex;
  justify-content: center;
  color: black;
`;

export const Form = styled.form`
  margin: 30px;
  display: flex;
  justify-content: center;

  input {
    flex: 1;
    height: 30px;
    padding: 5px;
    margin-left: 80px;
  }

  button{
    margin-left: 10px;
    margin-right: 80px;
    height: 30px;
    padding: 5px;
  }
`;

export const Output = styled.div`
  display: flex;
  justify-content: center;
`;
