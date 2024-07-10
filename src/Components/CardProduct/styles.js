import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 30px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
`
export const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 10px;
`
export const ProductName = styled.p`
  font-weight: 500;
`
export const Price = styled.p`
  font-weight: 900;
  margin-top: 5px;
  background-color: #ffa38790;
  padding: 5px 0;
  max-width: 80px;
  text-align: center;
`
