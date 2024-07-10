import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 30px;
  position: fixed;
  width: 100%;
  background-color: #ffffff99;
  z-index: 200;
`

export const ContainerLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`
export const ContainerRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  img {
    width: 40px;
  }
  .carrinho {
    border-right: 1.5px solid black;
    padding-right: 7px;
  }
`

export const PageLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${props => (props.isActive ? '#FF707C' : '#555555')};
  font-weight: ${props => (props.isActive ? 'bold' : 'normal')};
`

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;

  .sair {
    font-weight: 800;
  }
`
