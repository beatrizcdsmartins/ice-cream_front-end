import styled from 'styled-components'

export const Container = styled.div`
  background-color: #efefef;
  min-height: 100vh;
`
export const ProductImg = styled.img`
  width: 60px;
  border-radius: 5px;
  border: 2px solid #fff7f0;
  background-color: white;
`

export const Menu = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`
export const LinkMenu = styled.a`
  color: #3d3d3d;
  cursor: pointer;
  font-weight: ${props => (props.isActiveStatus ? 'bold' : '400')};
  border-bottom: ${props =>
    props.isActiveStatus ? '2px solid #ff090990' : 'none'};
`
