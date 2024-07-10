import styled from 'styled-components'

export const Container = styled.div`
  .containerItens {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  background-color: #ff707c;
  min-height: 100vh;
  padding-bottom: 30px;
`

export const CategoryButton = styled.button`
  margin-top: 100px;
  cursor: pointer;
  background: none;
  border: none;
  font-weight: 600;
  border-bottom: ${props =>
    props.isActiveCategory ? '2px solid #fff' : 'none'};
  padding-bottom: 3px;
  font-size: 12px;
  text-transform: uppercase;
  color: ${props => (props.isActiveCategory ? '#fff' : '#00000090')};
  text-align: center;
  letter-spacing: 0.5px;
  @media (max-width: 500px) {
    font-size: 10px;
  }
`
export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 400px));
  gap: 30px;
  justify-content: center;
  align-items: center;
  background-color: #ff707c;
  margin: 0 10px;

  img {
    width: min(200px, 50%);
  }
`
