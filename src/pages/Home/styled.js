import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  border: 1px solid #ddd;
  height: 2rem;
  padding: 0 0.5rem;
  border-radius: 0.25rem 0 0 0.25rem;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`;

export const Button = styled.button`
  background-color: #000;
  border: 1px solid #000;
  height: 2rem;
  font-size: 1rem;
  color: #fff;
  padding: 0 0.5rem;
  border-radius: 0 0.25rem 0.25rem 0;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`;
