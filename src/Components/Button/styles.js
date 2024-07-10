import styled from 'styled-components'

export const ContainerButton = styled.button`
  background-color: #e20056;
  margin: 20px 0;
  padding: 10px 20px;
  color: #fff7f0;
  text-transform: uppercase;
  font-weight: 800;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  letter-spacing: 1px;
  max-width: 200px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`
